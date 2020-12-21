import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import Login from '~/screens/login';
import Chats from '~/screens/chats';
import Conversation from '~/screens/conversation';

// Components
import HeaderLeft from '~/components/mainHeader/HeaderLeft';
import HeaderRight from '~/components/mainHeader/HeaderRight';

import { useUserContext } from '~/context/UserContext';

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
  </Tabs.Navigator>
);

const Navigation = () => {
  const {
    loggedIn,
    userInfo: { idToken },
  } = useUserContext();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn && idToken ? (
            <>
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
              <Stack.Screen name="Conversation" component={Conversation} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
