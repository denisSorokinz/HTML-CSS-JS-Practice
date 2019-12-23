import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { StatusBar } from "react-native";
import Root from './navigation/stackNavigator';

export default function App() {
    return (
      <Root />
    );
}