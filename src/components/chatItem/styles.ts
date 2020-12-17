import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

import { COLORS } from '~/assets';

export default StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    marginBottom: 18,
  },
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
  },
  infoWrapper: {
    flex: 1,
    padding: 5,
    paddingLeft: 10,
    borderBottomColor: COLORS.borderLightColor,
    borderBottomWidth: 0.5,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: '500',
    fontSize: 18,
  },
  messageTime: {
    fontSize: 12,
    opacity: 0.6,
  },
  lastMessage: {
    marginTop: 5,
    opacity: 0.7,
  },
});
