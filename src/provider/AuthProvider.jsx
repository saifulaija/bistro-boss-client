import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/config';

 export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

      const [user, setUser] = useState(null);
      const[loading, setLoading] = useState(true);



      const createUser = (email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      };


      const signIn = (email, password)=>{
            setLoading(true);
           return signInWithEmailAndPassword(auth, email, password)
      };

      const logOut=()=>{
            setLoading(true);
            signOut(auth)
            
      }


      useEffect(()=>{
          const unsubscribe=  onAuthStateChanged(auth, currentUsr =>{
                  console.log(currentUsr);
                  setUser(currentUsr)
                  setLoading(false)
            })
            return ()=>{
                  unsubscribe();
            }
      },[])


       const updateUserProfile=(name, photo)=>{
           return updateProfile(auth.currentUser,{
                  displayName:name, photoURL:photo
            })
       }
   

const authInfo ={
  user,
  createUser,
  signIn,
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