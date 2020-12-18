import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ICONS } from '~/assets';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const Interface = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Conversation')}
    >
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
    </TouchableOpacity>
  );
};

export default Interface;
