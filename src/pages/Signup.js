import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert('sucess')
    );
  };
  return (
    <div className="signup-page">
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
      <button onClick={createUser} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Signup;
