'use client';
import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { username, password });
    navigate('/WardDashboard');
  };

  return (
    <form className={styles.div} onSubmit={handleSubmit}>
      <label htmlFor="username" className={styles.username}>
        Username
      </label>
      <input
        id="username"
        type="text"
        className={styles.div2}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        aria-label="Username"
      />

      <label htmlFor="password" className={styles.password}>
        Password
      </label>
      <input
        id="password"
        type="password"
        className={styles.div3}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        aria-label="Password"
      />

      <button type="submit" className={styles.signIn}>
        Sign In
      </button>

      <a href="#" className={styles.forgotyourpassword}>
        Forgot your password?
      </a>

      <a href="#" className={styles.createanAccount}>
        Create an Account
      </a>
    </form>
  );
};

export default LoginForm;
