import React, { useEffect } from 'react';
import { View } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import ChatItem from '~/components/chatItem';
import FloatingButton from '~/components/floatingButton';

import styles from './styles';

import { GoogleSignin } from '@react-native-community/google-signin';

import { useUserContext } from '~/context/UserContext';

const Interface = () => {
  const { emptyOutUserContext } = useUserContext();

  useEffect(() => {
    const ref = firestore()
      .collection('chat')
      .doc('jqrLysaXIVsS4yEY5nDr')
      .collection('messages')
      .onSnapshot((querySnapshot) => {
        const list: any = [];

        querySnapshot.forEach((doc) => {
          const { content } = doc.data();
          console.log('doc ===>>>', doc);
          list.push(content);
          console.log('LISTARA =>>>>>>', list);
        });
      });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      emptyOutUserContext();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ChatItem />
      <FloatingButton />
    </View>
  );
};

export default Interface;
