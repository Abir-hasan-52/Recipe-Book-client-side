import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import auth from '../Fairebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [loading, setLoading ]= useState(true);
    const [user, setUser] = useState(null);
const provider= new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        })
        return ()=>{
            unsubscribe();
        }
    },[])

const userInfo={
    loading,
    user,
    createUser,
    signIn,
    signInWithGoogle,
    signOutUser,
}

  return (
         <AuthContext value={userInfo}>
      {children}
         </AuthContext>
  );
};

export default AuthProvider;