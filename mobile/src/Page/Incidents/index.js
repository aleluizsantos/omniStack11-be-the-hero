import React, {useState, useEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {View, FlatList, Text, Image, TouchableOpacity,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../Services/api';
import styles from './styles';
import logoImg from '../../assets/logo.png';

/**
 * FUNCÃO INDICENTS
 */
export default function Incidents() {
  const navigation = useNavigation();
  
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);

  //Carregando os dados da API
  async function loadIncidents() {
    if(isloading) {
      return;
    }

    if(totalIncidents > 0 && incidents.length == totalIncidents) {
      return;
    }

    setIsLoading(true);

    const response = await api.get('/incidents', {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotalIncidents(response.headers['x-total-count']);
    setPage(page +1);
    setIsLoading(false);
  }
  useEffect(()=> {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Details', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents} //qunado o usuário chegar no final da lista
        onEndReachedThreshold={0.2} //Porcetual para carregar a nova lista 0 a 1
        showsVerticalScrollIndicator={true}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{incident.name} </Text>

            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>  {incident.title}  </Text>

            <Text style={styles.incidentProperty}>VALOR </Text>
            <Text style={styles.incidentValue}>  
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButtom}
              onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailsButtomText}>Ver mais detalhes</Text>
              <Icon name='arrow-right' size={16} color='#E02041' />

            </TouchableOpacity>
          </View>
        )}

      />
    </View>
  );
}
