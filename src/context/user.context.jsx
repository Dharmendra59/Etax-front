import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (data) => {
        setIsAuthenticated(true);
        setUser(data);
    }

    
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, isAuthenticated, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext);