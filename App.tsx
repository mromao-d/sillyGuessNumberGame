import { useState } from 'react';
// StatusBar purpose -> upscreen bar styles. Look it up you laze ass!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// outputs a gradient of 2 colors
import { LinearGradient } from 'expo-linear-gradient';
// import { background.png } from './assets/images/'

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from './screens/GameScreen';
import Colors from './utils/colors';
import GameOverScreen from './screens/GameOverScreen';


{/* <StartGameScreen /> */}
export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  function resetGameHandler() {
    setUserNumber(null);
  }

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} min={1} max={100}/>;

  if (userNumber) {
    screen=<GameScreen chosenNumber={userNumber}  onRtart={resetGameHandler} onEnd={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen=<GameOverScreen onRestart={resetGameHandler}/>
  }

  if (gameIsOver && !userNumber) {
    screen=<StartGameScreen onConfirmNumber={pickedNumberHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.yeallow1]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style='light'/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage:{
    opacity:0.15,
  }
});
