import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import { Page1 } from '../Pages/Page1';
import { Page2 } from '../Pages/Page2';
import { Page3 } from '../Pages/Page3';
import { Page4 } from '../Pages/Page4';

export const MyStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'lightgray' },
    headerTintColor: 'black',
  },
  screens: {
    Home: Home,
    Page1: {
      screen: Page1,
      initialParams: { id: 'default-id' },
    },
    Page2: {
      screen: Page2,
      initialParams: { name: 'default-name' },
    },
    Page3: {
      screen: Page3,
      initialParams: { number: 0 },
    },
    Page4: {
      screen: Page4,
      initialParams: { flag: false },
    },
  },
});

export const Navigation = createStaticNavigation(MyStack);
