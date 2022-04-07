import { AuthContext } from './providers/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Subscription from './Subscription';
import styled from 'styled-components';
import axios from 'axios';

export default function Subscriptions () {

    const [subscriptions, setSubscriptions] = useState ([]);
    const { token } = useContext(AuthContext);
    
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
            console.log(err.response);
            alert ('Algo deu errado. Vamos tentar de novo.  ╭( ･ㅂ･)و');
        });

    }

    useEffect(() => {

        getSubscriptions();

    })

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

        <SubscriptionsContainer>
            {showSubscriptions}
        </SubscriptionsContainer>

    );

}

const SubscriptionsContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 15px;

`;