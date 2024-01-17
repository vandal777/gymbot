import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import {createStaticNavigation} from '@react-navigation/native';
import CounterScreen from './src/screens/CounterScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Start: StartScreen,
    Counter: CounterScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
