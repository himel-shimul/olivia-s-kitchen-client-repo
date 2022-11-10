import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = (googleProvider) =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    } 

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        localStorage.removeItem('token');
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("inside auth state change", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        };
    } , [])

    const authInfo ={
        user,
        createUser,
        loading,
        login,
        googleLogIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;