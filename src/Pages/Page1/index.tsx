import { View } from 'react-native';
import { MyStack } from '../../Stack/stack';
import { StaticScreenProps } from '@react-navigation/native';
import { Text } from 'react-native-gesture-handler';

type Props = StaticScreenProps<{
  id?: string;
}>;

export const Page1 = ({ route }: Props) => {
   const { id } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>
          Page 1 - ID: {id}
        </Text>
      </View>
    </View>
  );
};
