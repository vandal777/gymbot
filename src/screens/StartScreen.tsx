import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationRootStackScreenProps} from './types';

function StartScreen(): React.JSX.Element {
  const {navigate} = useNavigation<NavigationRootStackScreenProps<'Home'>>();
  const [restTime, setRestTime] = useState('');

  const handlePressStart = () => {
    const seconds = parseInt(restTime, 10);
    navigate('Counter', {seconds});
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.title}>Add time to rest (seconds)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={restTime}
          onChangeText={setRestTime}
        />
        <TouchableOpacity style={styles.button} onPress={handlePressStart}>
          <Text style={styles.buttonText}>Press to Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, textAlign: 'center', margin: 10},
  input: {
    height: 200,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 100,
    fontSize: 56,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {color: 'white', fontSize: 20, textAlign: 'center'},
});

export default StartScreen;
