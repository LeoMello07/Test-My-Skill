import Slider, { SliderProps } from "@react-native-community/slider";
import React, { useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type ScaledSliderAlignment = "left" | "center" | "right"

export interface ScaledSliderProps extends SliderProps {
  /**
   * The scaled slider shows a unwanted padding effect when scaled.
   * Choose the alignment to compensate for this effect on the chossen side,
   * e.g. when alignScaledSlider="right", the slider will show no unwanted padding
   *  to the right.
   * @default "center"
   */
  alignScaledSlider?: ScaledSliderAlignment
  /**
   * Approximated size of the thumb in pixels.
   * HACKTTENTION: The thumb size also affects the the slider length & height!!!
   * These effects will have to be accounted for during styling... it's just a hack.
   */
  thumbSize?: number
}

// This defines how well the `thumbSize` prop approximates the actual pixel value.
// In case you realize e.g. that the thumb appears smaller than `thumbSize` decrease
// `defaultThumbSize...` slightly.
const defaultThumbSize = Platform.OS === "android" ? 15 : 20;

export const ScaledSlider: React.FC<ScaledSliderProps> = (props) => {
  const {
    alignScaledSlider = "center",
    onSlidingComplete,
    style,
    thumbSize,
    value,
    ...restProps
  } = props

  const [sliderValue, setSliderValue] = useState<number | undefined>(value)
  const [sliderWidth, setSliderWidth] = useState<number | undefined>(undefined)

  // Scale with which the slider will be transformed
  const scale: number = useMemo(() => thumbSize
    ? thumbSize / defaultThumbSize
    : 1,
    [thumbSize])

  const $flattenedStyle = useMemo(() => StyleSheet.flatten(style), [style])

  const _onLayout = useCallback((event: LayoutChangeEvent) => {
    setSliderWidth(event.nativeEvent.layout.width)
  }, [])

  // BUGFIX: On fast sliding, the slider does not jump around anymore after sliding is completed
  const _onSlidingComplete = useCallback((val: number) => {
    setSliderValue(val)
    onSlidingComplete?.(val)
  }, [value])

  // After scaling, the slider shows unwanted padding effects which can be compensated at 
  // least on one side that can be chosen by `alignScaledSlider`.
  const $paddingCompensation: ViewStyle = useMemo(() => (alignScaledSlider !== "center"
    ? {
      [alignScaledSlider]: (sliderWidth !== undefined
        ? - sliderWidth * (1 - scale) / 2 // compensation for unwanted "padding-effect" from scaling
        : 0) + (typeof $flattenedStyle.right === 'number' ? $flattenedStyle.right : 0),
    }
    : {}
  ), [sliderWidth, scale, style])

  const $style: StyleProp<ViewStyle> = useMemo(() => ([{
    ...$paddingCompensation,
    transform: [{ scale }],
    width: "40%"
  }, style, { width: "100%" }]
  ), [sliderWidth, style])

  return (
    <View style={{ width: $flattenedStyle.width }} onLayout={_onLayout}>
      <Slider
        style={$style}
        onSlidingComplete={_onSlidingComplete}
        value={sliderValue}
        {...restProps}
      />
    </View>
  )
}