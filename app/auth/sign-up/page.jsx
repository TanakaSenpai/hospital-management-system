import Image from 'next/image'
import React from 'react'
import LoginImage from "@/public/Images/login.jpg"
import "./styles.css"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <div className='container mt-3 '>
      <div class="box p-4">
        <div class="right-section w-full md:w-2/4">
          <div class="container w-full">
            <h2 className="text-primary text-3xl mb-5 font-semibold">
              Sign up for an account
            </h2>
            <form>
              <div class="input-group">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
              <div class="input-group">
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
              <div class="input-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div class="input-group">
                <label for="height">Height</label>
                <input
                  type="height"
                  id="height"
                  name="height"
                  placeholder="Enter Your Height"
                  required
                />
              </div>
              <div class="input-group">
                <label for="weight">Weight</label>
                <input
                  type="weight"
                  id="weight"
                  name="weight"
                  placeholder="Enter Your Weight"
                  required
                />
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Your Password"
                  required
                />
              </div>
              <div class="flex items-center gap-2 mb-3">
                <input type="checkbox" id="terms" name="terms" required />
                <label for="terms">
                  I accept all the{" "}
                  <Link href="#" className="text-primary">
                    terms and conditions
                  </Link>
                </label>
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <p className="mt-2">
              Already have an account?{" "}
              <Link href="/auth/sign-in" className="text-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div class="left-section bg-primary">
          <div class="content">
            <h1 className='text-4xl font-semibold mb-5'>Care For Your health</h1>
            <Image src={LoginImage} alt="Hospital Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage
