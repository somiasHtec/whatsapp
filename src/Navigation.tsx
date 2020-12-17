import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import Chats from '~/screens/chats';
import Status from '~/screens/status';
import Calls from '~/screens/calls';

// Components
import HeaderLeft from '~/components/mainHeader/HeaderLeft';
import HeaderRight from '~/components/mainHeader/HeaderRight';

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();

import { COLORS } from '~/assets';

const TabNavigation = () => (
  <Tabs.Navigator
    tabBarOptions={{
      style: { backgroundColor: COLORS.tealGreenDark },
      labelStyle: { color: COLORS.white, fontWeight: '600' },
      indicatorStyle: { backgroundColor: COLORS.white, height: 4 },
    }}
  >
    <Tabs.Screen name="Chats" component={Chats} />
    <Tabs.Screen name="Status" component={Status} />
    <Tabs.Screen name="Calls" component={Calls} />
  </Tabs.Navigator>
);

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{
              title: '',
              headerLeft: () => <HeaderLeft />,
              headerRight: () => <HeaderRight />,
              headerStyle: {
                backgroundColor: COLORS.tealGreenDark,
                shadowOpacity: 0,
                elevation: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
