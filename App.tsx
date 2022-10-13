import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PanLearning from './src/PanLearning';
import SwipeLearning from './src/SwipeLearning';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SwipeLearning />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
