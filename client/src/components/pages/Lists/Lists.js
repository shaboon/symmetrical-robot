import React from "react";
import Login from "./Token/Login/Login";
import SignUp from "./Token/SignUp/SignUp";

export default function Blog() {
  return (
    <div>
      <button>Login</button>
      <button>Sign Up</button>
      <Login />
      <SignUp />
    </div>
  );
}
