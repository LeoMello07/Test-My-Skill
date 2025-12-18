import BottomSheet from '@gorhom/bottom-sheet';
import {
    makeMutable,
} from 'react-native-reanimated';
import { useBottomSheetLocal } from './context';
import { Height } from '../utils';
import SliderScreen from '../Slider';

export const bottomSheetY = makeMutable(Height);

export const BottomSheetComponent = () => {
    const { ref } = useBottomSheetLocal();

    return (
        <BottomSheet
            ref={ref}
            index={0}
            snapPoints={['50%']}
            animatedPosition={bottomSheetY}
            enablePanDownToClose={true}
            enableContentPanningGesture={true}
            enableOverDrag={false}
            failOffsetX={[-50, 50]}
            activeOffsetY={[-10, 10]}
            handleComponent={null}
            enableDynamicSizing={false}
            backgroundStyle={{ backgroundColor: 'transparent' }}
        >
            <SliderScreen />
        </BottomSheet>
    );
};
