import React from 'react';
import { View, Text, Button } from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

GoogleSignin.configure({
  webClientId:
    '1002436516645-k0q45hufahv5414avtcg7mjqgjr78ckf.apps.googleusercontent.com',
});

import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!')
          )
        }
      />
    </View>
  );
};

export default Interface;
