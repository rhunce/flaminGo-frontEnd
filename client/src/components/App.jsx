import React from 'react';
import MainHeader from './GlobalComponents/Header.jsx';
import Landing from './landingPage/MainLanding';
import Login from './login/Login.jsx';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <main className='main'>
          <MainHeader />
          <Landing user={user} />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
