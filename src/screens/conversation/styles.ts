import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '~/assets';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatInputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 10,
    alignItems: 'flex-end',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 32,
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    paddingRight: 15,
    maxHeight: 250,
  },
  sendButton: {
    backgroundColor: COLORS.tealGreen,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 2.5,
  },
  sendImage: {
    width: 18,
    height: 18,
  },
  messageContainer: {
    padding: 5,
    alignSelf: 'flex-end',
  },
  friendMessageContainer: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  messageBox: {
    backgroundColor: COLORS.messageGreen,
    marginLeft: 50,
    borderRadius: 5,
    padding: 10,
  },
  friendMessageBox: {
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  messageStyle: {
    fontSize: 16,
    lineHeight: 20,
  },
});
