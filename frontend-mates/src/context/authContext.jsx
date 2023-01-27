import { useEffect, useState } from "react";
import { createContext } from "react"; 
import axios from 'axios';
import 'dotenv/config';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const BACKEND_URL = process.env.BACKEND_URL;
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
      );
    const login = async (inputs) => {
        const res = await axios.post(`${BACKEND_URL}/api/auth/login}`, inputs);
        setCurrentUser(res.data)
    }

    const logout = async () => {
        await axios.post(`${BACKEND_URL}/api/auth/logout}`);
        setCurrentUser(null)
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}