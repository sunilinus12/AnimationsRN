import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function PanLearning() {
  const value = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;
  const pan = useRef(new Animated.ValueXY()).current;

  function moveBall() {
    Animated.spring(value, {
      toValue: {x: 100, y: 0},
      // duration: 100,
      useNativeDriver: false,
    }).start();
  }
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('Pan handler access granted');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;
  console.log(pan.getLayout());
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, pan.getLayout()]}
        {...panResponder.panHandlers}
      />
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
    backgroundColor: 'black',
    borderRadius: 50,
  },
});
