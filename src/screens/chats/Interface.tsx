import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import firestore from '@react-native-firebase/firestore';

// import ChatItem from '~/components/chatItem';

import styles from './styles';

const Interface = () => {
  const [todo, setTodo] = useState('');
  const ref = firestore().collection('dragance');

  const [todos, setTodos] = useState([]);
  // ...

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { title, complete } = doc.data();

        console.log('DOC ===>>', doc);
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setTodos(list);
    });
  }, []);

  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }

  console.log(todo);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Halo halo"
        style={{ borderWidth: 2, height: 50, borderColor: '#c7d1c9' }}
        onChangeText={(value) => setTodo(value)}
        value={todo}
      />
      <Button title="Submit" onPress={() => addTodo()} />
    </View>
  );
};

export default Interface;
