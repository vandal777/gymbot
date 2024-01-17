import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteRootStackScreenProps} from './types';
import Sound from 'react-native-sound';

const CounterScreen = () => {
  const {params} = useRoute<RouteRootStackScreenProps<'Counter'>>();
  const [seconds, setSeconds] = useState(params?.seconds);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const beepSound = new Sound('beep.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
  });

  const handleFinishCounter = () => {
    beepSound.play(success => {
      if (success) {
        console.log('Beep sound played successfully');
      } else {
        console.log('Failed to play the beep sound');
      }
    });
  };

  const handleStartRest = () => {
    setButtonDisabled(true);
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    setTimeout(() => {
      setButtonDisabled(false);
      handleFinishCounter();
      setSeconds(params?.seconds);
      clearInterval(interval);
    }, params?.seconds * 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{seconds}</Text>
          </View>

          <Text style={styles.secondsText}>Seconds to start the set:</Text>
        </View>

        <TouchableOpacity
          onPress={() => handleStartRest()}
          disabled={buttonDisabled}
          style={[styles.buttonContainer, {opacity: buttonDisabled ? 0.5 : 1}]}>
          <Text style={styles.buttonText}>Start Rest</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingTop: 24,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  circleText: {
    fontSize: 56,
    fontWeight: '600',
  },
  secondsText: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 24,
  },
  buttonContainer: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
  },
});
export default CounterScreen;
