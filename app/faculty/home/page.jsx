'use client';
import { auth } from '@/app/firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'


const FacultyHomePage = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    const handleLogout = async () => {
        try {
          await signOut(auth);
          console.log('logged out!');
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div>
        <div>
            <h1>Welcome Faculty UID: { user ? user.uid : null}</h1>
        </div>
        <button onClick={handleLogout} style={{width: '100px',backgroundColor: 'blue',color: 'white'}}>
            logout
        </button>
    </div>
  )
}

export default FacultyHomePage