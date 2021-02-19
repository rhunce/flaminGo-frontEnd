import React from 'react';
import MainHeader from './GlobalComponents/Header.jsx';
import Landing from './landingPage/MainLanding';
import Login from './login/Login.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import useChoosePath from './landingPage/useChoosePath.jsx';

const App = () => {
  const { isAuthenticated, user } = useAuth0();

  const [paths, setPaths] = useChoosePath({
    management: false,
    hm: false,
    frontDesk: false,
    timeSheet: false,
    landing: true,
  });

  return (
    <div>
      {isAuthenticated ? (
        <main className='main'>
          <MainHeader back={() => setPaths('landing')} />
          <Landing paths={paths} setPaths={setPaths} />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
