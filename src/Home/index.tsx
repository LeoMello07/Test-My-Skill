import { Pressable, View } from 'react-native';
import { useBottomSheetLocal } from '../BottomSheet/context';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

  const { present, presentHalf } = useBottomSheetLocal();

  const onPress1 = () => {
    navigation.navigate('Page1', { });
  };

  const onPress2 = () => {
    presentHalf();
  };

  const onPress3 = () => {};

  return (
    <View style={styles.homeContainer}>
      <Pressable
        onPress={onPress1}
        style={[styles.pressableButton, { backgroundColor: 'red' }]}
      />

      <Pressable
        onPress={onPress2}
        style={[styles.pressableButton, { backgroundColor: 'black' }]}
      />

      <Pressable
        onPress={onPress3}
        style={[styles.pressableButton, { backgroundColor: 'pink' }]}
      />
    </View>
  );
};
