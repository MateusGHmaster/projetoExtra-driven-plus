import axios from 'axios';
import styled from 'styled-components';
import Arrow from './components/ArrowBack.svg';
import PerksBlock from './components/Perks.svg';
import PriceBlock from './components/Price.svg';
import Button from './Button';
import Modal from './Modal';
import { AuthContext } from './providers/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function SubscriptionsInfo () {

    const [subInfo, setSubInfo] = useState ({perks: [], price: ''});
    const [cardName, setCardName] = useState ('');
    const [cardNumber, setCardNumber] = useState ('');
    const [security, setSecurity] = useState ('');
    const [date, setDate] = useState ('');
    const [ordered, setOrdered] = useState ('');
    const [modal, setModal] = useState (false);
    const { token, user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const { id } = useParams();

    const config = {

        headers: {

            Authorization: `Bearer ${token}` 
        
        }

    };

    function getSubscriptionInfo () {

        const promise = axios.get (`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config);
        promise.then (response => {
            const {data} = response;
            setSubInfo(data);
        })
        promise.catch (err => {
            alert ('Algo deu errado. Vamos tentar de novo.  ಥ﹏ಥ ');
            navigate('/');
        });

    }

    useEffect(() => {

        getSubscriptionInfo();

    }, [])

    function showPerks () {

        return subInfo.perks.map(perk => {
            const { title } = perk;
            return (
                <>
                    <li>{title}</li>
                </>
            );
        });

    }

    function makeOrder () {

        const promise = axios.post ('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
        membershipId: id,
        cardName: cardName,
        cardNumber: cardNumber,
        securityNumber: security,
        expirationDate: date
        },config);

        promise.then (response => {
            const {data} = response;
            console.log({ ...user, membership: data.membership });
            setUser({ ...user, membership: data.membership });
            navigate('/home');
        })

        promise.catch (err => {
            alert ('Algo deu errado. Vamos tentar de novo.  ಥ﹏ಥ ');
            navigate('/');
        });

    }

    return (

        <>

            <ArrowBackLink to={'/subscriptions'}>
                <img src={Arrow} width={28} height={28} alt={'go-back'}/>    
            </ArrowBackLink>
            <SubLogoBox>
                <img src={subInfo.image} width={140} height={95} alt={'sub-plan'} />
                {subInfo.name}
            </SubLogoBox>
            <SubCombo>
                <Perks>
                    <img src={PerksBlock} width={16} height={16} alt={'perks'}/>
                    <Caption>Benefícios:</Caption>
                    <PerkList>{showPerks()}</PerkList>
                </Perks>
                <Price>
                    <img src={PriceBlock} width={16} height={16} alt={'perks'}/>
                    <Caption>Preço:</Caption>
                    <PriceList>R${subInfo.price.replace(".", ",")} cobrados mensalmente</PriceList>
                </Price>
            </SubCombo>
            <BuyerCredentials>
                <NormalSizeInputs>
                    <NormalInput type={'text'} placeholder={'Nome impresso no cartão'} value={cardName} onChange={(e) => setCardName(e.target.value)} />
                    <NormalInput type={'text'} placeholder={'Dígitos do cartão'} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                </NormalSizeInputs>
                <SmallSizeInputs>
                    <SmallInput type={'text'} placeholder={'Código de segurança'} value={security} onChange={(e) => setSecurity(e.target.value)}/>
                    <SmallInput type={'text'} placeholder={'Validade'} value={date} onChange={(e) => setDate(e.target.value)}/>
                </SmallSizeInputs>
            </BuyerCredentials>
            <Order>
                <Button onClick={() => {setModal(true)}}/*
                    if (window.confirm('Quer fazer essa assinatura?') === true) {
                        makeOrder(); 
                    }}} */>ASSINAR</Button>
            </Order>
            {modal && <Modal setModal={setModal} makeOrder={makeOrder()} name={subInfo.name} price={subInfo.price} />}

        </>

    );

}

const ArrowBackLink  = styled(Link)`

    margin-left: 15px;

`;

const SubLogoBox  = styled.div`

    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #FFFFFF;

`;

const SubCombo  = styled.div`

    background-color: none;

`;

const Perks  = styled.ol`

    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #FFFFFF;

`;

const Caption = styled.div`

    margin-top:-18px;
    margin-left: 20px;    

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;

`;

const PerkList = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 15px;
    margin-left: 15px;

`;

const Price  = styled.div`

    margin-left: 40px;
    color: #FFFFFF;

`;

const PriceList = styled.div`

    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #FFFFFF;

`;

const BuyerCredentials  = styled.div`

    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const NormalSizeInputs  = styled.div`

    display: flex;
    flex-direction: column;

`;

const NormalInput  = styled.input`

    height: 70px;
    width: 350px;
    border: 1px solid transparent;
    background-color: #FFFFFF;
    color: #888;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    border-radius: 8px;

`;

const SmallSizeInputs  = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;

`;

const SmallInput  = styled.input`

    height: 70px;
    width: 163px;
    border: 1px solid transparent;
    background-color: #FFFFFF;
    color: #888;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    border-radius: 8px;

`;

const Order = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    color: #7E7E7E;

`;




