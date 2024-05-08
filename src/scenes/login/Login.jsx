import React, { useState, useEffect } from 'react';
import Image from 'D:/Phase-2-my-changes/Phase-2-my-changes/src/assets/image.png';
import Logo from 'D:/Phase-2-my-changes/Phase-2-my-changes/src/assets/logo.png';
import GoogleSvg from 'D:/Phase-2-my-changes/Phase-2-my-changes/src/assets/icons8-google.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import styles from './Login.module.css';
import './responsive.css';
import mockData from './LoginMock';
// import { GoogleAuth } from 'google-auth-library';
// import { useGoogleLogin } from './useGoogleLogin';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import Passer from '../../problem/Passer';

const Login = ({ setIsAuthenticated, isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [name, setName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [user, setUser] = useState(''); 

 
 
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to the server to create a new user
      const response = await axios.post('http://localhost:3000/api/signup', {
        name,
        email: signUpEmail,
        password: signUpPassword,
      });
  
      console.log('New user created:', response.data);
      
  
      // Reset the sign-up form
      setName('');
      setSignUpEmail('');
      setSignUpPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Email:", email); // Check email
      console.log("Password:", password); // Check password
  
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      
      if (response.data.success) {
        setIsAuthenticated(true);
         // Fetch the user data after successful login
         setUser(response.data);
         console.log('loginuser',user)
        
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };


  return (
    <div className={styles['login-container']}>
      <div className={styles.root}>
        <div className={styles['login-main']}>
          <div className={styles['login-right']}>
            <div className={styles['login-right-container']}>
              <div className={styles['login-logo']}>
                <img src={Logo} alt="" />
              </div>
              <div className={styles['login-center']}>
                <h2>Welcome back!</h2>
                <p>Please enter your details</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={styles['pass-input-div']}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                      <FaEye onClick={() => setShowPassword(!showPassword)} />
                    )}
                  </div>

                  <div className={styles['login-center-options']}>
                    <div className={styles['remember-div']}>
                      <input type="checkbox" id="remember-checkbox" />
                      <label htmlFor="remember-checkbox">Remember for 30 days</label>
                    </div>
                    <a href="#" className={styles['forgot-pass-link']}>
                      Forgot password?
                    </a>
                  </div>
                  <div className={styles['login-center-buttons']}>
                    <button type="submit">Log In</button>
                    <button type="button">
                      <img src={GoogleSvg} alt="" />
                      Log In with Google
                    </button>
                  </div>
                </form>
              </div>

              <p className={styles['login-bottom-p']}>
                Don't have an account?{' '}
                <a href="#" onClick={() => setShowSignUpForm(true)}>
                  Sign Up
                </a>
              </p>

              {/* Sign-up Form */}
              {showSignUpForm && (
                <div className={styles['signup-form']}>
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSignUp}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={signUpEmail}
                      onChange={(e) => setSignUpEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={signUpPassword}
                      onChange={(e) => setSignUpPassword(e.target.value)}
                    />
                    <button type="submit">Sign Up</button>
                  </form>
                  <button onClick={() => setShowSignUpForm(false)}>Cancel</button>
                </div>
              )}
            </div>
          </div>
        
        </div>
        {/* {isAuthenticated && <Passer username={user.name} />} */}
      </div>
    </div>
  );
};

export default Login;