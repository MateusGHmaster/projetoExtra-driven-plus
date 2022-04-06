import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';

export default function Register () {

    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function refreshOnError () {
        window.location.reload(false);
    }

    function registerUser () {

        setLoading(true);
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: name,
            cpf: CPF,
            password: password
        });

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            console.log(data);
            navigate('/'); 
        })

        promise.catch (err => {
            setLoading(false);
            console.log(err);
            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
            refreshOnError();
        })

    }

    return (

        <RegisterContainer>
            <Input type={'text'} placeholder={'Nome'} value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type={'text'} placeholder={'CPF'} value={CPF} onChange={(e) => setCPF(e.target.value)}/>
            <Input type={'email'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={registerUser}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                    ) : (
                        'CADASTRAR'        
                    ) 
                }
            </Button>
            <StyledLink to='/'>Já possui uma conta? Entre!</StyledLink>
        </RegisterContainer>

    );

}

const RegisterContainer = styled.div`

    margin-top: 200px;
    margin-left: 7px;
    height: 100%;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    margin-top: 15px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

`;