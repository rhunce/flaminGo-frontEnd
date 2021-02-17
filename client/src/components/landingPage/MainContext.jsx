import React, { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children, authUser }) => {
  const [user, setUser] = useState({
    position: authUser['http://127.0.0.1:3000/user_metadata'].position,
    fullMeta: authUser['http://127.0.0.1:3000/user_metadata'],
    id: authUser.sub,
  });

  return <MainContext.Provider value={user}>{children}</MainContext.Provider>;
};
