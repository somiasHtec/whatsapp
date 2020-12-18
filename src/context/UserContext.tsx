import React, { createContext, useState, useContext } from 'react';

type ContextType = {
  value: string | null;
};

export const UserContext = createContext({
  loggedIn: false,
  setLoggedIn: (type: boolean) => {},
  idToken: '',
  setIdToken: (id: any) => {},
  name: '',
  setName: (name: any) => {},
  lastName: '',
  setLastName: (lastName: any) => {},
  userPhoto: '',
  setUserPhoto: (photoUrl: any) => {},
});

type Props = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [idToken, setIdToken] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string>('');

  const value = {
    loggedIn,
    setLoggedIn,
    idToken,
    setIdToken,
    name,
    setName,
    lastName,
    setLastName,
    userPhoto,
    setUserPhoto,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const {
    loggedIn,
    setLoggedIn,
    idToken,
    setIdToken,
    name,
    setName,
    lastName,
    setLastName,
    userPhoto,
    setUserPhoto,
  } = useContext(UserContext);

  return {
    loggedIn,
    setLoggedIn,
    idToken,
    setIdToken,
    name,
    setName,
    lastName,
    setLastName,
    userPhoto,
    setUserPhoto,
  };
};
