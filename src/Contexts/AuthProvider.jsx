import React from 'react';
import { AuthContext } from './AuthContext';
import auth from '../Fairebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthProvider = ({children}) => {
const provider= new GoogleAuthProvider();

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
const userInfo={
    createUser,
    signIn,
    signInWithGoogle,
}

    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;