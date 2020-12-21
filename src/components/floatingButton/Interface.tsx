import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICONS } from '~/assets';

import styles from './styles';

const Interface = () => (
  <View style={styles.addPerson}>
    <TouchableOpacity onPress={() => Alert.alert('Helloo')}>
      <Image
        source={ICONS.startConversation}
        style={styles.startConversation}
      />
    </TouchableOpacity>
  </View>
);

export default Interface;
