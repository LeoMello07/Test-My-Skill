import {
  BackHandler,
  Button,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetComponent } from './src/BottomSheet';
import React, { useEffect } from 'react';
import { BottomSheetLocalProvider } from './src/BottomSheet/context';
import { Home } from './src/Home';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyStack, Navigation } from './src/Stack/stack';

// Gera o tipo automaticamente baseado no MyStack acima
type RootStackParamList = StaticParamList<typeof MyStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetLocalProvider>
          <Navigation />
          <BottomSheetComponent />
        </BottomSheetLocalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
