import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinPage = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("signin success"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-page">
      <h1>Signin here</h1>
      <label>email</label>
      <input
        type="email"
        required
        placeholder="enter your email here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>password</label>
      <input
        type="password"
        placeholder="enter your password here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={signinPage} type="submit">
        signin
      </button>
    </div>
  );
};

export default Signin;
