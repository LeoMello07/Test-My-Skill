import BottomSheet from '@gorhom/bottom-sheet';
import { createContext, PropsWithChildren, useContext, useRef, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';

type BottomSheetMode = 'main' | 'half';

export const SNAP_POINTS = {
    main: ['95%'],          // 🔥 sem intermediário
    half: ['50%', '95%'],   // meia tela → pode expandir
};

interface BottomSheetLocalContext {
    ref: React.RefObject<BottomSheet | null>;
    present: () => void;
    presentHalf: () => void;
    dismiss: () => void;
    scrollViewX: ReturnType<typeof useSharedValue<number>>;
    scrollViewSelected: number;
    setScrollViewSelected: (index: number) => void;
}

const BottomSheetLocalContext = createContext<BottomSheetLocalContext | null>(null);

export const BottomSheetLocalProvider = ({ children }: PropsWithChildren) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const scrollViewX = useSharedValue(0);
    const [scrollViewSelected, setScrollViewSelected] = useState(0);

    const present = () => {
        requestAnimationFrame(() => {
            bottomSheetRef.current?.expand(); //95%
        });
    };

    const presentHalf = () => {
        requestAnimationFrame(() => {
            bottomSheetRef.current?.snapToIndex(0); // 50%
        });
    };

    const dismiss = () => {
        bottomSheetRef.current?.close();
    };

    return (
        <BottomSheetLocalContext.Provider
            value={{
                ref: bottomSheetRef,
                present,
                presentHalf,
                dismiss,
                scrollViewX,
                scrollViewSelected,
                setScrollViewSelected,
            }}
        >
            {children}
        </BottomSheetLocalContext.Provider>
    );
};

export const useBottomSheetLocal = () => {
    const context = useContext(BottomSheetLocalContext);
    if (!context) {
        throw new Error('useBottomSheetLocal must be used within a BottomSheetLocalProvider');
    }
    return context;
};
