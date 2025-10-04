
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await axios.get("/profile");
                setUser(data); 
            } catch (err) {
                setUser(null);
            } finally {
                setReady(true); 
            }
        };
        fetchProfile();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    );
}
