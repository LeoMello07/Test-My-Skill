/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  return (
    <View style={styles.container}>
      <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 12 }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 12 }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 12 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
});

export default App;
