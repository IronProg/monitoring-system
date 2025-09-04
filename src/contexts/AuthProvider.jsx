import { useEffect, useState } from "react";
import { LOGGED_USER_KEY } from "../globals";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const userJson = localStorage.getItem(LOGGED_USER_KEY);
        if (userJson) {
            try {
                const user = JSON.parse(userJson);
                setLoggedUser(user);
            } catch (error) {
                console.error("Erro ao fazer o parse do usuário logado:", error);
                localStorage.removeItem(LOGGED_USER_KEY);
            }
        }
    }, []);

    const login = (user) => {
        localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
        setLoggedUser(user);
    };

    const logout = () => {
        localStorage.removeItem(LOGGED_USER_KEY);
        setLoggedUser(null);
    };

    return (
        <AuthContext.Provider value={{ loggedUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};