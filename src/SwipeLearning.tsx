import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gesture, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function SwipeLearning() {
  const X = useSharedValue(0);
  const tap = Gesture.Tap().onStart(() => {
    console.log('tap');
  });
  const swiped = useAnimatedGestureHandler({
    onActive: e => {
      X.value = e.translationX;
    },
    onEnd: e => {
      if (X.value < 175 - 90) {
        X.value = withSpring(0);
      }

      else {
        X.value = withSpring(175 - 90);
      }
    }
  });
  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <PanGestureHandler onGestureEvent={swiped}>
          <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: '5%',
  },
  box: {
    width: 350,
    height: 90,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  swipeable: {
    height: 82,
    width: 82,
    borderRadius: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    left: 0,
  },
});
