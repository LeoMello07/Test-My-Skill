import { Text, View } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';

type TooltipProps = {
  arrowRef?: any;
  setFloating: any;
  floatingStyles: any;
  middlewareData?: any;
};

export const Tooltip = ({
  arrowRef,
  setFloating,
  floatingStyles,
  middlewareData,
}: TooltipProps) => {
  return (
    <>
      <Animated.View
        ref={setFloating}
        style={floatingStyles}
        entering={ZoomIn}
        exiting={ZoomOut}
      >
        <View
          style={{
            width: 150,
            height: 80,
            backgroundColor: 'black',
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>aaa</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>bbb</Text>
        </View>

        <View
          ref={arrowRef}
          style={{
            position: 'absolute',
            width: 8,
            height: 8,
            bottom: -4,
            transform: 'rotate(45deg)',
            backgroundColor: 'green',
            left: middlewareData.arrow?.x,
            top: -middlewareData.arrow?.y,
            zIndex: -1,
          }}
        />
      </Animated.View>
    </>
  );
};
