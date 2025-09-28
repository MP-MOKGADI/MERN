// import { createContext } from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";


// export const UserContext = createContext({});

// export function UserContextProvider({children}) {
//     const [user, setUser] = useState(null);
//     const [ready, setReady] = useState(false);
//     useEffect(() => {
//         if (!user) {
//              axios.get('/profile').then((data)=> {
//                 setUser(data);
//                 setReady(true);
//              });
//         }
//     }, []);
    
//     return(
//         <UserContext.Provider value={{user, setUser, ready}}>
//             {children}
//         </UserContext.Provider>
//     )
// }
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
                setUser(data); // user is null if not logged in
            } catch (err) {
                setUser(null); // fail gracefully
            } finally {
                setReady(true); // always mark ready
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
