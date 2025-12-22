import { Pressable, Text, View } from 'react-native';
import { useBottomSheetLocal } from '../BottomSheet/context';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useFloating, shift, offset, arrow } from '@floating-ui/react-native';
import { useRef, useState } from 'react';
import { Tooltip } from '../components/Tooltip';

export const Home = () => {
  const navigation = useNavigation();
  const arrowRef = useRef(null);

  const { refs, floatingStyles, middlewareData, update } = useFloating({
    placement: 'top',
    middleware: [
      offset(16),
      shift({ padding: 16 }),
      arrow({ element: arrowRef.current }),
    ],
  });

  const refButton1 = useRef(null);
  const refButton2 = useRef(null);

  const { present, presentHalf } = useBottomSheetLocal();

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const onPress1 = () => {
    if (tooltipOpen) {
      refs.setReference(null);
      setTooltipOpen(false);
      return;
    }
    refs.setReference(refButton1.current);
    setTooltipOpen(true);
  };

  const onPress2 = () => {
    if (tooltipOpen) {
      refs.setReference(null);
      setTooltipOpen(false);
      return;
    }
    refs.setReference(refButton2.current);
    setTooltipOpen(true);
  };

  const onPress3 = () => {
    update();
    refs.setReference(null);
    setTooltipOpen(false);
  };

  return (
    <View style={styles.homeContainer} collapsable={false}>
      <Pressable
        ref={refButton1}
        collapsable={false}
        onPress={onPress1}
        style={[styles.pressableButton, { backgroundColor: 'red' }]}
      />

      <Pressable
        ref={refButton2}
        onPress={onPress2}
        style={[styles.pressableButton, { backgroundColor: 'black' }]}
      />

      <Pressable
        onPress={onPress3}
        style={[styles.pressableButton, { backgroundColor: 'pink' }]}
      />

      {tooltipOpen && (
        <Tooltip
          setFloating={refs.setFloating}
          floatingStyles={floatingStyles}
          middlewareData={middlewareData}
          arrowRef={arrowRef}
        />
      )}
    </View>
  );
};
