import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext({
  loggedIn: false,
  setLoggedIn: (type: boolean) => {},
});

type Props = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const value = {
    loggedIn,
    setLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return { loggedIn, setLoggedIn };
};
