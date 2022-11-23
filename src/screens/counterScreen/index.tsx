import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incremented, decremented } from '../../store/counterReducer';
import { routes } from '../route'

export function CounterScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);

  const onIncrement = () => {
    dispatch(incremented())
  }

  const onDecrement = () => {
    dispatch(decremented())
  }

  const onNext = () => {
    navigation.navigate(routes.preview)
  }

  return (
      <View style={styles.container}>
        <Text>Counter Screen</Text>
        <View style={styles.counterContainer}>
          <View>
            <TouchableOpacity onPress={onDecrement}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>
              {counter.value}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={onIncrement}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={onNext}>
            <Text>Next</Text>
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
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    margin: 10
  }
});
