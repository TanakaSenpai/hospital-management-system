'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LoginImage from "@/public/Images/login.jpg"
import "./styles.css"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "@/app/config/firebase"
import PublicAuthCheck from "@/app/public/components/PublicAuthCheck"
import Cookies from "js-cookie"

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password)
      const {user} = await signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      Cookies.set("userId", user.uid)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container flex justify-center mt-10">
      <PublicAuthCheck />
      <div class="box">
        <div className="login-container">
          <h1 className='text-3xl font-semibold'>Login here</h1>
          <form id="loginForm">
            <div class="input-group">
              <label for="mobileNumber">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e)=> {setEmail(e.target.value)}}
                required
              />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input className='w-full' type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div class="options">
              <label>
                <input type="checkbox" name="rememberMe" /> Remember me
              </label>
            </div>
            <Button className='w-full' type="submit" onClick={handleSignIn}>Login</Button>
          </form>
          <Link href="/auth/sign-in" class="create-account">
            {"Don't"} have an account?
          </Link>
        </div>
        <div className="w-2/4 p-5 hidden md:block">
          <Image src={LoginImage} alt="Hospital Management Service" />
        </div>
      </div>
    </div>
  );
}

export default SignInPage
