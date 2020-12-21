import React from 'react';

import Interface from './Interface';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import { useUserContext } from '~/context/UserContext';

GoogleSignin.configure({
  webClientId:
    '1002436516645-k0q45hufahv5414avtcg7mjqgjr78ckf.apps.googleusercontent.com',
});

const Container = () => {
  const { setLoggedIn, userInfo, setUserInfo } = useUserContext();

  const setUserContextData = (userInfo: any) => {
    setUserInfo({
      idToken: userInfo.idToken,
      name: userInfo.user.name,
      lastName: userInfo.user.familyName,
      userPhoto: userInfo.user.photo,
      email: userInfo.user.email,
      userId: userInfo.user.id,
    });
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const data = await GoogleSignin.signIn();

      setLoggedIn(true);
      setUserContextData(data);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return <Interface signIn={signIn} />;
};

export default Container;
