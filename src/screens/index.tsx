import { createStackNavigator } from '@react-navigation/stack';
import { CounterScreen } from './counterScreen';
import { PreviewScreen } from './previewScreen';
import { routes } from './route'

const Stack = createStackNavigator();

export function ApplicationStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name={routes.counter} component={CounterScreen} />
        <Stack.Screen name={routes.preview} component={PreviewScreen} />
      </Stack.Navigator>
    );
  }