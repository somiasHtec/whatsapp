import React, { createContext, useState, useContext } from 'react';

type UserInfo = {
  idToken: string;
  name: string;
  lastName: string;
  userPhoto: string;
  email: string;
  userId: string;
};

const initialState = {
  idToken: '',
  name: '',
  lastName: '',
  userPhoto: '',
  email: '',
  userId: '',
};

export const UserContext = createContext({
  loggedIn: false,
  setLoggedIn: (type: boolean) => {},

  userInfo: {
    idToken: '',
    name: '',
    lastName: '',
    userPhoto: '',
    email: '',
    userId: '',
  },
  setUserInfo: (value: UserInfo) => {},
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
  const [email, setEmail] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const [userInfo, setUserInfo] = useState<UserInfo>(initialState);

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
    email,
    setEmail,
    userId,
    setUserId,
    userInfo,
    setUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const { loggedIn, setLoggedIn, userInfo, setUserInfo } = useContext(
    UserContext
  );

  const emptyOutUserContext = () => {
    setLoggedIn(false);
    setUserInfo(initialState);
  };

  return {
    loggedIn,
    setLoggedIn,
    userInfo,
    setUserInfo,
    emptyOutUserContext,
  };
};
