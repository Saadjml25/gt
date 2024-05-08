// // useGoogleLogin.js
// import { useState } from 'react';
// import { GoogleAuth } from 'google-auth-library';
// import Buffer from 'buffer/';
// window.Buffer = Buffer;

// export const useGoogleLogin = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleGoogleLogin = async () => {
//     try {
//       const auth = new GoogleAuth({
//         clientId: '468780456974-ivuh69aaf4sctfage3p1ml5hdplmoetf.apps.googleusercontent.com',
//         redirectUri: 'https://accounts.google.com/o/oauth2/auth',
//         scope: 'https://www.googleapis.com/auth/userinfo.email',
//       });
  
//       const user = await auth.signIn();
//       setIsLoggedIn(true);
  
//       // Handle the user data
//       const userInfo = user.getBasicProfile();
//       console.log('Google Sign-In successful:', userInfo);
  
//       // Set the authentication state or perform any necessary actions
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Error with Google Sign-In:', error);
//     }
//   };

//   return { isLoggedIn, handleGoogleLogin };
// };