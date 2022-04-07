import React from 'react';
import styled from 'styled-components';
import Subscription from './Subscription';

function Modal({ setModal, name, price }) {

  return (

    <ModalContainer>
        <ModalTitle>Tem certeza que deseja assinar o plano</ModalTitle>
        <SubscriptionConfirmation>{name} (R${price.replace(".", ",")})</SubscriptionConfirmation>
        <ModalBody>
          <CancelButton onClick={() => {
              setModal(false);
            }}>Não</CancelButton>
          <ConfirmButton>Sim</ConfirmButton>
        </ModalBody>
    </ModalContainer>
  );

}

export default Modal;

const ModalContainer = styled.div`

    margin-top: -600px;
    margin-left: auto;
    margin-right: auto;
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 12px;
    z-index: 1;

`;

const SubscriptionConfirmation = styled.div`

    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;

`;

const CancelButton = styled.div`

    width: 95px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #CECECE;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;    

`;

const ConfirmButton = styled.div`

    width: 95px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF4791;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;

`;

const ModalTitle = styled.div`

    margin-top: 35px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;

`;

const ModalBody = styled.div`

    margin-top: 35px;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;

`;