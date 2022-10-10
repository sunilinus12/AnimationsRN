import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const value = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  )[0];
  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 100,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, value.getLayout()]} />
      <TouchableOpacity onPress={() => moveBall()} activeOpacity={0.5}>
        <Text>App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
