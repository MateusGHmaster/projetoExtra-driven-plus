import Logo from './Logo';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';


export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function refreshOnError () {

        window.location.reload(false);

    }

    function loginUser () {

        setLoading(true);
        const promise = axios.post ('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: password
        });

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            localStorage.setItem('userToken', data.token);
            data.membership === null ? navigate('/subscriptions') : navigate('/home'); 
        })

        promise.catch (err => {
            setLoading(false);
            console.log(err);
            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
            refreshOnError();
        })
    }

    return (

        <LoginContainer>
            <Logo />
            <Input type={'text'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={loginUser}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                    ) : (
                        'ENTRAR'        
                    ) 
                }
            </Button>
            <StyledLink to='/sign-up'>Não possui uma conta? Cadastre-se!</StyledLink>
        </LoginContainer>

    );

}

const LoginContainer = styled.div`

    height: 100vh;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    height: 15px;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;