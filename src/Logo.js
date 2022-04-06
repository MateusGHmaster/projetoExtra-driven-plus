import logo from './components/logo.png';
import styled from 'styled-components';

export default function Logo () {

    return (

        <LoginLogo >
            <img src={logo} alt={'login-logo'} height={49} width={299} />
        </LoginLogo >

    );

} 

const LoginLogo = styled.div`

    margin-top: -200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;
    z-index: 1;

`;