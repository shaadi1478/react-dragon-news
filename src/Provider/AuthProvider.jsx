import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createuser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
        })
    },[])
    const authInfo = {
        user,
        createuser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}