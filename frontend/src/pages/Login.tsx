'use client';
import React from 'react';
import styles from '../Components/Login.module.css';
import StatusBar from '../Components/StatusBar';
import LoginForm from '../Components/LoginForm';

function Login() {
  return (
    <section className={styles.login}>
      

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2adf4865804f573ea9324542efb987ecc8fed77441f7eca1179f114126cdeac?placeholderIfAbsent=true&apiKey=bf7f239ee7f948cbb0410597d9379836"
        alt="Company logo"
        className={styles.img3}
      />

      <h1 className={styles.welcome}>Welcome</h1>

      <LoginForm />
    </section>
  );
}

export default Login;

