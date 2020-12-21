import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './styles';

import { ICONS } from '~/assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useUserContext } from '~/context/UserContext';

const Interface = () => {
  const {
    userInfo: { email },
  } = useUserContext();

  const myMessageContainer =
    email === 'milos.savkovic@htecgroup.com'
      ? styles.messageContainer
      : styles.friendMessageContainer;
  const myMessageBox =
    email === 'milos.savkovic@htecgroup.com'
      ? styles.messageBox
      : styles.friendMessageBox;

  return (
    <ImageBackground
      source={ICONS.chatBackground}
      style={{ flex: 1, width: '100%' }}
      resizeMode="stretch"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/*  */}
          <View style={myMessageContainer}>
            <View style={myMessageBox}>
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>

          <View style={myMessageContainer}>
            <View style={myMessageBox}>
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>

          <View style={myMessageContainer}>
            <View style={myMessageBox}>
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>

          <View style={myMessageContainer}>
            <View style={myMessageBox}>
              <Text style={styles.messageStyle}>oki doki</Text>
            </View>
          </View>

          <View style={styles.chatInputContainer}>
            <View style={styles.inputWrapper}>
              <Image
                source={ICONS.profile}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  marginRight: 10,
                  alignSelf: 'flex-end',
                  marginBottom: 5,
                }}
              />
              <TextInput
                placeholder="Type a message"
                style={styles.textInput}
                multiline={true}
              />
            </View>
            <TouchableOpacity style={styles.sendButton}>
              <Image source={ICONS.send} style={styles.sendImage} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Interface;
