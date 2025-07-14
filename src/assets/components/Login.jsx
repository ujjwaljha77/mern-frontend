import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user);
      setError("Welcome");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      {error}
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <Link to="/register">Create Account</Link>
    </div>
  );
}