import { Dimensions, Platform } from 'react-native';
import { PixelRatio } from 'react-native';
const { width, height } = Dimensions.get(Platform.OS === 'android' ? 'screen' : 'window');

export const Width = width;
export const Height = height;

const FIGMA_WIDTH = 390;
const FIGMA_HEIGHT = 844;

const scale = (pxSize: number, base: number, device: number) => {
  if (!pxSize) return 0;
  const raw = (pxSize / base) * device;
  const rounded = PixelRatio.roundToNearestPixel(raw);
  return rounded === 0 ? 0.5 : rounded;
};

export const normalizeWidth = (pxSize: number) => scale(pxSize, FIGMA_WIDTH, Width);
export const normalizeHeight = (pxSize: number) => scale(pxSize, FIGMA_HEIGHT, Height);
