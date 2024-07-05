"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginImage from "@/public/Images/login.jpg";
import "./styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [allergies, setAllergies] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err)
    }
  }

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
                <label for="name">Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div class="input-group">
                <label for="email">Email Address</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div class="input-group">
                <label for="age">Age</label>
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div class="input-group">
                <label for="height">Height</label>
                <input
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="mb-5">
                <label>Have any Allergies?</label>
                <RadioGroup
                  defaultValue={allergies}
                  className="flex gap-8 mt-2"
                  onChange={(e) => setAllergies(e.target.value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" onClick={handleSignUp} className="w-full">
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
};

export default SignUpPage;
