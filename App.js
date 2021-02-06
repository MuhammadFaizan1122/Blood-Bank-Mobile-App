import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation'
import { Provider } from 'react-redux'
import store from './redux'



export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}
