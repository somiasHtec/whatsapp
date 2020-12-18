import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './src/Navigation';

import { UserContextProvider } from './src/context/UserContext';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </>
  );
};

export default App;
