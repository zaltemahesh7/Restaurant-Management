import { useContext, useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const StoreToken = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken)
    }

    // Logout Functionality

    let isLogin = !!token;
    const LogoutUser = () => {
        setToken('');
        return localStorage.removeItem('token');
    }


    return (
        <Auth.Provider value={{ StoreToken, LogoutUser, isLogin }}>
            {children}
        </Auth.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(Auth);
    if (!authContextValue) {
        throw new Error('useAuth is used Outside of Auth Provider');
    }

    return authContextValue;
}

