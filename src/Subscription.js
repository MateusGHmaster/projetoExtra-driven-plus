import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Subscription ({ id ,image, price }) {

    const navigate = useNavigate();

    return (

        <SingleSubscription onClick={() => {navigate(`/subscriptions/${id}`)}}>
            <SubLogo>
                <img src={image} height={95} width={92} alt={'sub-visual'}/>
            </SubLogo>
            <Price>
                R${price.replace(".", ",")}
            </Price>
        </SingleSubscription>

    );

}

const SingleSubscription = styled.div`

    width: 290px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;

`;

const SubLogo = styled.div`

    height: 95px;
    width: 92px;
    margin-left: 14px;

`;

const Price = styled.div`

    font-family: 'Roboto';
    margin-right: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;

`;