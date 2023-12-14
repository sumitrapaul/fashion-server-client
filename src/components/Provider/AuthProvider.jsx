/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext=createContext(null)
const auth=getAuth(app)

const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser=(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleProfileUpdate =(name,picture) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:picture
        })
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe=onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user,
        googleLogin,
        createUser,
        signIn,
        handleProfileUpdate,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;