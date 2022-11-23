import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function PreviewScreen({ navigation }: any) {
  const counter = useSelector((state: RootState) => state.counter);

    const onBack = () => {
        navigation.goBack()
    }

  return (
      <View style={styles.container}>
        <Text>Preview Screen</Text>
        <View>
          <Text style={styles.text}>{counter.value}</Text>
        </View>
        <TouchableOpacity onPress={onBack}>
            <Text>Back</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    margin: 10
  }
});
