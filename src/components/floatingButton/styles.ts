import { StyleSheet } from 'react-native';

import { COLORS } from '~/assets';

export default StyleSheet.create({
  addPerson: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    bottom: 40,
  },
  startConversation: {
    width: 25,
    height: 25,
  },
});
