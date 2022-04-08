import { AuthContext } from './providers/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subscription from './Subscription';
import Icon from './components/ProfileIcon.svg';
import styled from 'styled-components';
import Button from './Button';
import axios from 'axios';

export default function Home () {

    const navigate = useNavigate();
    const { user, setUser, token } = useContext(AuthContext);

    const config = {

        headers: {

            Authorization: `Bearer ${token}` 
        
        }

    };

    function showPerks () {

        if (user.membership.perks !== undefined) {

            if(user.membership.perks.length > 0) {
                return user.membership.perks.map(perk => {
                    const { title, link } = perk;
                    return (
                        <>
                            <a href={link} target={'_blank'}>{title}</a>
                        </>
                    );
                });
            }

        }
    }

    function deleteSubscription () {

        const promise = axios.delete ('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config);

        promise.then (response => {
            /* setLoading(false); */
            console.log({ ...user, membership: {perks: []} });
            setUser({ ...user, membership: {perks: []} });
            navigate('/subscriptions');
        })

        promise.catch (err => {
            /* setLoading(false); */
            console.log(err);
            alert('Sentimos muito, mas correu um erro ao cancelar seu plano atual. Por favor, tente novamente.   ( 0 _ 0 )');
        })

    }

    return (
        <>
            <HomeHeader>
                <SubSelectedLogo>
                    <img src={user.membership.image} height={34} width={34} alt={'fsds'}/>
                </SubSelectedLogo>
                <ProfileIcon>
                    <img src={Icon} height={34} width={34} alt={'sub-visual'}/>
                </ProfileIcon>
            </HomeHeader>
            <HomeBody>
                <HomeTitle>Olá, {user.name}</HomeTitle>
                <PerksButtons>
                    {showPerks()}
                </PerksButtons>
                <NavigationButtons>
                    <Button onClick={() => navigate('/subscriptions')}>Mudar plano</Button>
                    <Button onClick={deleteSubscription}>Cancelar plano</Button>
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
