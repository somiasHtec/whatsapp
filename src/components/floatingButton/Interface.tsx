import React from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const Interface = () => (
  <View style={styles.addPerson}>
    <TouchableOpacity onPress={() => Alert.alert('Helloo')}>
      <Text style={styles.plusSign}>+</Text>
    </TouchableOpacity>
  </View>
);

export default Interface;
