import {AuthContext} from "../context/index.js";
import {useState} from "react";


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;