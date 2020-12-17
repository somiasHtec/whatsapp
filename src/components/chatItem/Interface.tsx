import React from 'react';
import { View, Text, Image } from 'react-native';

import { ICONS } from '~/assets';

import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <Image source={ICONS.profile} style={styles.imageStyle} />
      <View style={styles.infoWrapper}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Milos Savkovic</Text>
          <Text style={styles.messageTime}>3:20 at night</Text>
        </View>
        <View style={styles.lastMessage}>
          <Text>I put a screnshot in the issue</Text>
        </View>
      </View>
    </View>
  );
};

export default Interface;
