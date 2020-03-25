import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncidents() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar umherói pararesolver isso.</p>

                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder='Titulo do Caso' />
                    <textarea placeholder='Descriçao' />
                    <input type="text" placeholder='Valor em reais' />

                    <button className="button" type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}