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
      //   onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
        //sets the offset value 0 after release the ball and value=value+offset
      },
    }),
  ).current;
  console.log(pan.getLayout());
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            left: pan.x,
            top: pan.y,
          },
          // pan.getLayout()
        ]}
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
  sliderwrap: {
    flex: 0.2,
    backgroundColor: 'red',
    height: 50,
    width: '100%',
  },
});
