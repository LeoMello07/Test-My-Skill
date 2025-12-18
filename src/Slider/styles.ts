import { StyleSheet } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../utils';

export const styles = StyleSheet.create({
  slider: {
    width: normalizeWidth(315),
    height: normalizeHeight(14),
    left: normalizeWidth(15 / 2),
  },
  textValue: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    backgroundColor: 'gray',
    paddingHorizontal: normalizeWidth(40),
    gap: normalizeHeight(40),
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: normalizeWidth(20),
    borderTopRightRadius: normalizeWidth(20),
  },
  sliderContent: {
    paddingHorizontal: normalizeWidth(40),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalizeWidth(20),
  },
  minimumTrackStyle: {
    height: normalizeHeight(2),
    backgroundColor: '#EF8E3C',
  },
  trackStyle: {
    height: normalizeHeight(2),
    backgroundColor: 'rgba(255, 0, 255, 0.5)',
  },
});
