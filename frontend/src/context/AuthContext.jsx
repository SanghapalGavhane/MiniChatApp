import {useState,useContext, createContext } from "react";

export const  AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

// export const AuthContextProvider = ({children}) => {
//     const[authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

//     return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
// };

export const AuthContextProvider = ({ children }) => {
    // Ensure authUser is properly initialized and set
    const initialAuthUser = JSON.parse(localStorage.getItem("chat-user")) || { _id: null };
    const [authUser, setAuthUser] = useState(initialAuthUser);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};


