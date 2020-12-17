import React from 'react';
import { View, Text } from 'react-native';

import ChatItem from '~/components/chatItem';

import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </View>
  );
};

export default Interface;
