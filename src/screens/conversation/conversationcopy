import React from 'react';
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

const Interface = () => {
  return (
    <ImageBackground
      source={ICONS.chatBackground}
      style={{ flex: 1, width: '100%' }}
      resizeMode="stretch"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            <View style={styles.messageBox}>
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.messageBox}>
              <Text style={styles.messageStyle}>Lorem sdasdasdasd</Text>
            </View>
          </View>

          <View style={[styles.messageContainer, { alignSelf: 'flex-start' }]}>
            <View
              style={{
                marginRight: 50,
                borderRadius: 5,
                padding: 10,
                backgroundColor: 'white',
              }}
            >
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>

          <View style={styles.messageContainer}>
            <View style={styles.messageBox}>
              <Text style={styles.messageStyle}>
                Lorem
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </Text>
            </View>
          </View>

          <View style={[styles.messageContainer, { alignSelf: 'flex-start' }]}>
            <View
              style={{
                marginRight: 50,
                borderRadius: 5,
                padding: 10,
                backgroundColor: 'white',
              }}
            >
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
