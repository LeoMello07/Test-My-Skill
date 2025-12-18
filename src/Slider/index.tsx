import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';
import { ScaledSlider } from './teste';
import { normalizeWidth, normalizeHeight } from '../utils';
import { Slider as RNESlider } from '@miblanchard/react-native-slider';

export default function SliderScreen() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContent}>
        <RNESlider
          // onSlidingStart={() => handleStartSliding()}
          // onSlidingComplete={value => handleStopSliding(value[0])}
          onValueChange={value => setValue(value[0])}
          renderThumbComponent={() => (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 99999,
                backgroundColor: 'red',
              }}
            />
          )}
          value={value}
          trackStyle={styles.trackStyle}
          minimumTrackStyle={styles.minimumTrackStyle}
          thumbTouchSize={{
            width: normalizeWidth(48),
            height: normalizeHeight(22),
          }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          trackClickable={true}
          containerStyle={{
            width: normalizeWidth(315),
            height: normalizeHeight(14),
            left: normalizeWidth(15 / 2),
          }}
        />
      </View>

      <View style={styles.sliderContent}>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          onValueChange={value => setValue2(value)}
          style={styles.slider}
          value={value2}
          // thumbTintColor={'white'}
          maximumTrackTintColor={'blue'}
          minimumTrackTintColor={'orange'}
        />
      </View>
    </View>
  );
}
