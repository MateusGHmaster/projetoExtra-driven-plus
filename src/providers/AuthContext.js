import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider ({ children }) {

    const [token, setToken] = useState('');
    const [user, setUser] = useState({ 
        membership: {}
    }); 

    return (

        <AuthContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>

    );

}

