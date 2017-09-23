import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import {
  getTheme,
} from 'react-native-material-kit';

import HomeScreen from './components/Home'

const theme = getTheme();

const Application = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
