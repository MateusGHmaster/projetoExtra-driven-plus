import { createContext } from 'react';

const AuthContext = createContext();

export function AuthContextProvider ({ children }) {

    return (

        <AuthContext.Provider value={{ auth, userLogin }}>
            {children}
        </AuthContext.Provider>

    );

}