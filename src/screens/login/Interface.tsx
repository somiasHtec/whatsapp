import React from 'react';
import { View } from 'react-native';

import { GoogleSigninButton } from '@react-native-community/google-signin';

import styles from './styles';

type Props = {
  signIn: () => {};
};

const Interface = ({ signIn }: Props) => {
  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
};

export default Interface;
