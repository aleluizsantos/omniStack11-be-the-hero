import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../Services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('@nameOng');
    const ong_id = localStorage.getItem('@ongId');

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ong_id
            }
        }).then(response => {setIncidents(response.data)})
    },[ong_id]);

    async function HandleDeleteIncident(id) {
        try {
          await api.delete(`incidents/${id}`, { 
              headers: {
                  Authorization:  ong_id,
              }
           });

           //Excluir do State
           setIncidents(incidents.filter(incident => incident.id !== id ));

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className='button' to='/newincidents'>Cadastrar novo caso</Link>

                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#e02041' />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso</strong>
                    <p>{incident.title}</p>

                    <strong>Descrição</strong>
                    <p>{incident.description}</p>

                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(incident.value) }</p>

                    <button onClick={() => HandleDeleteIncident(incident.id)} type='button'>
                        <FiTrash2 size={20} color='#a9a9b3' />
                    </button>
                </li>
                ))}
            </ul>

        </div>
    );
}