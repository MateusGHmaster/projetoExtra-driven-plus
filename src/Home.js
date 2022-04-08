import { AuthContext } from './providers/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subscription from './Subscription';
import Icon from './components/ProfileIcon.svg';
import styled from 'styled-components';
import Button from './Button';
import axios from 'axios';

export default function Home () {

    

    return (
        <>
            <HomeHeader>
                <SubSelectedLogo>LOGO</SubSelectedLogo>
                <ProfileIcon>
                    <img src={Icon} height={34} width={34} alt={'sub-visual'}/>
                </ProfileIcon>
            </HomeHeader>
            <HomeBody>
                <HomeTitle>Olá, Miyazaki</HomeTitle>
                <PerksButtons></PerksButtons>
                <NavigationButtons>
                    <Button>Mudar plano</Button>
                    <Button>Cancelar plano</Button>
                </NavigationButtons>
            </HomeBody>
        </>
    );

}

const HomeBody = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

`;

const HomeHeader = styled.div`

    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const SubSelectedLogo = styled.div`

    margin-left: 15px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;

const ProfileIcon = styled.div`

    margin-right: 15px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;

const HomeTitle = styled.div`

    margin-top: 50px;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #FFFFFF;

`;

const PerksButtons = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

`;

const NavigationButtons = styled.div`

    margin-top: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    font-family: 'Roboto', sans-serif;
    font-weight: 600;

`;
