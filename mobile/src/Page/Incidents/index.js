import React from 'react';
import {useNavigation} from "@react-navigation/native";
import { 
  View, 
  FlatList, 
  Text, 
  Image, 
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {

  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Details');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>APAD </Text>

            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>Cadalinha atropelada </Text>

            <Text style={styles.incidentProperty}>VALOR </Text>
            <Text style={styles.incidentValue}> R$ 120,00 </Text>

            <TouchableOpacity
              style={styles.detailsButtom}
              onPress={navigateToDetail}>

              <Text style={styles.detailsButtomText}>Ver mais detalhes</Text>
              <Icon name='arrow-right' size={16} color='#E02041' />

            </TouchableOpacity>
          </View>
        )}

      />
    </View>
  );
}
