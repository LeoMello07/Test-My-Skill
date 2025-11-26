import {
  Image,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';

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
      <View style={styles.content}>
        <View style={styles.box}>
          <Image source={require('./assets/happyDog.jpg')} style={styles.img} />
          <BlurView style={styles.absolute} blurType="light" blurAmount={0} overlayColor='transparent' />
        </View>

        <View style={styles.box}>
          <Image source={require('./assets/happyDog.jpg')} style={styles.img} />
          <BlurView style={styles.absolute} blurType="light" blurAmount={3} />
        </View>

        <View style={styles.box}>
          <Image source={require('./assets/happyDog.jpg')} style={styles.img} />
          <BlurView style={styles.absolute} blurType="light" blurAmount={10} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    gap: 15,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
