import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  // TouchableOpacity,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import ChatItem from '~/components/chatItem';
import FloatingButton from '~/components/floatingButton';

import styles from './styles';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import { GoogleSignin } from '@react-native-community/google-signin';

import { useUserContext } from '~/context/UserContext';

const Interface = () => {
  const [todo, setTodo] = useState('');
  const ref = firestore().collection('dragance');

  const { name, lastName } = useUserContext();

  const [todos, setTodos] = useState([]);
  // ...

  // useEffect(() => {
  //   return ref.onSnapshot((querySnapshot) => {
  //     const list = [];
  //     querySnapshot.forEach((doc) => {
  //       const { title, complete } = doc.data();

  //       console.log('DOC ===>>', doc);
  //       list.push({
  //         id: doc.id,
  //         title,
  //         complete,
  //       });
  //     });

  //     setTodos(list);
  //   });
  // }, []);

  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }

  console.log(todo);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="Halo halo"
        style={{ borderWidth: 2, height: 50, borderColor: '#c7d1c9' }}
        onChangeText={(value) => setTodo(value)}
        value={todo}
      /> */}
      {/* <Button title="Submit" onPress={() => addTodo()} /> */}

      <Text>name: {name}</Text>
      <Text>lastName: {lastName}</Text>

      <ChatItem />
      <FloatingButton />

      <Button title="Sign out" onPress={signOut} disabled={true} />
    </View>
  );
};

export default Interface;
