import { BackHandler, Button, StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetComponent } from './src/BottomSheet';
import React, { useEffect } from 'react';
import { BottomSheetLocalProvider } from './src/BottomSheet/context';
import { Home } from './src/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';


  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetLocalProvider>
          <Home />
          <BottomSheetComponent />
        </BottomSheetLocalProvider>

      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
