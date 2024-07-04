import Image from 'next/image'
import React from 'react'
import LoginImage from "@/public/Images/login.jpg"
import "./styles.css"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <div className="container flex justify-center mt-10">
      <div class="box">
        <div className="login-container">
          <h1 className='text-3xl font-semibold'>Login here</h1>
          <form id="loginForm">
            <div class="input-group">
              <label for="mobileNumber">Email</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                required
              />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input className='w-full' type="password" id="password" name="password" required />
            </div>
            <div class="options">
              <label>
                <input type="checkbox" name="rememberMe" /> Remember me
              </label>
            </div>
            <Button className='w-full' type="submit">Login</Button>
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
