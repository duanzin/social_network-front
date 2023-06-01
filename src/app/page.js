"use client";
import React, { useState } from "react";
import { AuthForm, AuthInput, AuthButton } from "./styleIndex";
import { signIn, signUp } from "./api/route";

export default function Login() {
  const [signupPage, setSignupPage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    pfp: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signupPage) {
        const user = await signUp(formData);
        console.log(user);
        setSignupPage(false);
      } else {
        const user = await signIn(formData);
        console.log(user);
        setSignupPage(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <h1 class="text-black text-4xl font-black">Social Network</h1>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength="6"
          value={formData.password}
          onChange={handleChange}
        />
        {signupPage ? (
          <>
            <AuthInput
              name="name"
              type="text"
              placeholder="Username"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <AuthInput
              name="pfp"
              type="text"
              placeholder="Profile picture url"
              required
              value={formData.pfp}
              onChange={handleChange}
            />
            <AuthButton type="submit">Sign up</AuthButton>
            <button
              type="button"
              class="text-normal text-lg text-[#1DA1F2]"
              onClick={() => setSignupPage(false)}
            >
              Already have an account? Login now!
            </button>
          </>
        ) : (
          <>
            <AuthButton type="submit">Log in</AuthButton>
            <button
              type="button"
              class="text-normal text-lg text-[#1DA1F2]"
              onClick={() => setSignupPage(true)}
            >
              Don't have an account yet? Sign up now!
            </button>
          </>
        )}
      </AuthForm>
    </>
  );
}
