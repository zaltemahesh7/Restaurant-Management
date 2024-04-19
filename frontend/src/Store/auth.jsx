import { useContext } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const StoreToken = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }
    return (
        <Auth.Provider value={{ StoreToken }}>
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