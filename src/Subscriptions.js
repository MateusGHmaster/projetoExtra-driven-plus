import { AuthContext } from './providers/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subscription from './Subscription';
import styled from 'styled-components';
import axios from 'axios';

export default function Subscriptions () {

    const [subscriptions, setSubscriptions] = useState ([]);
    const { token } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const config = {

        headers: {

            Authorization: `Bearer ${token}` 
        
        }

    };

    function getSubscriptions () {

        const promise = axios.get ('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config);
        promise.then (response => {
            const {data} = response;
            setSubscriptions(data);
        })
        promise.catch (err => {
            alert ('Algo deu errado. Vamos tentar de novo.  ╭( ･ㅂ･)و');
            navigate('/');
        });

    }

    useEffect(() => {

        getSubscriptions();

    }, [])

    function showSubscriptions () {

        if(subscriptions.length > 0) {
            return subscriptions.map(subscription => {
                const { id, image, price } = subscription;
                return (
                    <>
                        <Subscription id={id} image={image} price={price} />
                    </>
                );
            });
        }
    }

    return (

        <SubscriptionsPage>
            <SubscriptionsTitle>Escolha seu Plano</SubscriptionsTitle>
            <SubscriptionsContainer>
                {showSubscriptions()}
            </SubscriptionsContainer>
        </SubscriptionsPage>
    );

}

const SubscriptionsPage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const SubscriptionsContainer = styled.div`

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 15px;

`;

const SubscriptionsTitle = styled.div`

    margin-top: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: #FFFFFF;  

`;