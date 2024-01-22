"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm, AuthInput, Button } from "./styleIndex";
import { signIn, signUp } from "./api/route";
import { useGlobalContext } from "./Context/context";

export default function Page() {
  const { push } = useRouter();
  const { setToken } = useGlobalContext();
  const [signupPage, setSignupPage] = useState(false);
  const [disable, setDisable] = useState(false);
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    userName: "",
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
      setDisable(true);
      if (signupPage && formData.pfp === "") delete formData.pfp;
      if (signupPage) {
        if (formData.name.trim() === "" || formData.userName.trim() === "")
          throw new Error(
            "Name and Username cannot be empty or contain only spaces."
          );
        await signUp(formData);
        setDisable(false);
        setSignupPage(false);
      } else {
        const { token } = await signIn(formData);
        setToken(token);
        push("/home");
      }
    } catch (error) {
      setDisable(false);
      setErrors(error.response.data.message);
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h1 className="text-black text-4xl font-black">Social Network</h1>
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
            placeholder="Name"
            required
            maxLength="40"
            value={formData.name}
            onChange={handleChange}
          />
          <AuthInput
            name="userName"
            type="text"
            placeholder="Username(can't change)"
            required
            minLength="4"
            maxLength="20"
            value={formData.userName}
            onChange={handleChange}
          />
          <AuthInput
            name="pfp"
            type="text"
            placeholder="Profile picture url(optional)"
            value={formData.pfp}
            onChange={handleChange}
          />
          <Button type="submit" disabled={disable}>
            Sign up
          </Button>
          <button
            type="button"
            className="text-normal text-lg text-[#1DA1F2]"
            onClick={() => setSignupPage(false)}
          >
            Already have an account? Login now!
          </button>
        </>
      ) : (
        <>
          <Button type="submit" disabled={disable}>
            Log in
          </Button>
          <button
            type="button"
            className="text-normal text-lg text-[#1DA1F2]"
            onClick={() => setSignupPage(true)}
          >
            Don't have an account yet? Sign up now!
          </button>
        </>
      )}
      {errors && <span className="text-red-500">{errors}</span>}
    </AuthForm>
  );
}
