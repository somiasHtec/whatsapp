import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { useUserContext } from '~/context/UserContext';

import styles from './styles';

const Interface = () => {
  const [user, setUser] = useState({});

  const {
    setLoggedIn,
    setIdToken,
    setName,
    setLastName,
    setUserPhoto,
  } = useUserContext();

  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '1002436516645-k0q45hufahv5414avtcg7mjqgjr78ckf.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setLoggedIn(true);
      setIdToken(userInfo?.idToken);
      setName(userInfo?.user?.name);
      setLastName(userInfo?.user?.familyName);
      setUserPhoto(userInfo?.user?.photo);

      setUser({ userInfo });
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

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  console.log('STATE ===>>>', user);

  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
};

export default Interface;
