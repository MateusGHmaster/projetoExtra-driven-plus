import { AuthContext } from './providers/AuthContext';
import { useContext } from 'react';

export default function Subscriptions () {

    const { token } = useContext(AuthContext);
    console.log(token);

    return (

        <></>

    );

}