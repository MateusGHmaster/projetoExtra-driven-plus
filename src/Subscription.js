import styled from "styled-components";

export default function Subscription (props) {

    return (

        <SingleSubscription>
            <SubLogo>
                <img src={props.image} height={95} width={92}/>
            </SubLogo>
            <Price>
                {props.price}
            </Price>
        </SingleSubscription>

    );

}

const SingleSubscription = styled.div`

    width: 290px;
    height: 180px;

    background: #0E0E13;
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;

`;

const SubLogo = styled.div`

    height: 95px;
    width: 92px;

`;

const Price = styled.div`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;

`;