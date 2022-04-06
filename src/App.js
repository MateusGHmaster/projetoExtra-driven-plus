import Login from './Login';
import Register from './Register';
import Subscriptions from './Subscriptions';
import SubscriptionsInfo from './SubscriptionsInfo';
import Home from './Home';
import './components/style.css';
import { AuthContextProvider } from './providers/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App () {

    return (

        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setToken={() => {}}/>}/>
                    <Route path='/sign-up' element={<Register />}/>
                    <Route path='/subscriptions' element={<Subscriptions token={''} />}/>
                    <Route path='/subscriptions/id' element={<SubscriptionsInfo token={''} />}/>
                    <Route path='/home' element={<Home token={''} />}/>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>

    );

}