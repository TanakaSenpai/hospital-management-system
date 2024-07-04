import Image from 'next/image'
import React from 'react'
import LoginImage from "@/public/Images/login.jpg"
import "./styles.css"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SignUpPage = () => {
  return (
    <div className="container mt-3 ">
      <div class="box p-4">
        <div class="right-section w-full md:w-2/4">
          <div class="container w-full">
            <h2 className="text-primary text-3xl mb-5 font-semibold">
              Sign up for an account
            </h2>
            <form>
              <div class="input-group">
                <label for="first-name">Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Enter Your Name"
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
              <div className="mb-5">
                <label >Have any Allergies?</label>
                <RadioGroup defaultValue="comfortable" className="flex gap-8 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
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
              <Link href="/public/auth/sign-in" className="text-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div class="left-section bg-primary hidden md:block">
          <div class="content">
            <h1 className="text-4xl font-semibold mb-5">
              We Care For Your health
            </h1>
            <Image src={LoginImage} alt="Hospital Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage
