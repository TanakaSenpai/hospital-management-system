'use client'
import {useEffect, useState} from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";

const SignedIn = ({ children }) => {
    const [user] = useAuthState(auth);
      const [userEmail, setUserEmail] = useState("");

      useEffect(() => {
          if (!user) {
          } else {
            setUserEmail(user.email);
          }
      }, [user]);
  
      return userEmail ? children : null;
    
}

export default SignedIn
