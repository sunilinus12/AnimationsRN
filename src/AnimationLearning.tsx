import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function AnimationLearning() {
  // const value = useState(
  //   new Animated.ValueXY({
  //     x: 0,
  //     y: 0,
  //   }),
  // )[0];
  const value = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;

  function moveBall() {
    Animated.spring(value, {
      toValue: {x: 100, y: 0},
      // duration: 100,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, value.getLayout()]} />
      <TouchableOpacity onPress={() => moveBall()} activeOpacity={0.5}>
        <Text>click here to move the ball</Text>
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
