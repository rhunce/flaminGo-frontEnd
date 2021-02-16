import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextAreaForm from './styledElements/TextAreaForm.jsx'
import MainHeader from './GlobalComponents/Header.jsx'
import Landing from './landingPage/MainLanding';
import LoginButton from './login/LoginButton';
import LogoutButton from './login/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const [color, setColor] = useState('berry');

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  // useEffect(() => {getData()} , [])

    return (
      <main className='main'>
        {isAuthenticated ? 
          <LogoutButton />
          :
          <LoginButton />
        }
        <MainHeader />
        <Landing />
      </main>
    );
}

export default App;
