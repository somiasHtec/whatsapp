import React from 'react';
import { View, Image } from 'react-native';

import { ICONS } from '~/assets';

import styles from './styles';

const HeaderRight = () => {
  return (
    <View style={styles.headerRightWrapper}>
      <Image source={ICONS.search} style={styles.imageStyle} />
      <Image source={ICONS.settings} style={styles.imageStyle} />
    </View>
  );
};

export default HeaderRight;
