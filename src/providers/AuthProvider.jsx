import { createContext, useContext, useEffect, useState } from "react";
import { LOGGED_USER_KEY, USERS_KEY } from "../globals";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    const usersJson = localStorage.getItem(USERS_KEY);

    setUsers(JSON.parse(usersJson));
  }, []);

  const login = (user) => {
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
    setLoggedUser(user);
  };

  const logout = () => {
    localStorage.removeItem(LOGGED_USER_KEY);
    setLoggedUser(null);
  };

  const register = (newUser) => {
    const usersArray = [...users, newUser];

    localStorage.setItem(USERS_KEY, JSON.stringify(usersArray));
    setUsers(usersArray);

    login(newUser);
  }

  return (
    <AuthContext.Provider value={{ loggedUser, users, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}