import { ReactNode, useEffect, useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from "../components/ui/Title"
import NumberContainer from "../components/game/NumberContainer"

import Colors from "../utils/colors"

function generateRandomBetween(min:number,max:number,exclude:number) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}


type gameProps = {
    chosenNumber:number;
    onRtart: () => void;
    onEnd: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ chosenNumber, onRtart, onEnd }: gameProps) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, chosenNumber);
    const [guessedNumber, setGuessedNumber] = useState<number>(initialGuess);


    useEffect(()=>{
        if (guessedNumber === chosenNumber) {
            onEnd();
        }
    }, [guessedNumber, chosenNumber, onEnd]);
    // if (guessedNumber === chosenNumber) {
    //     Alert.alert("Congrats", "You WON", [{text:'Congrats!', style:'default'}])
    //     return ;
    // }

    function add(direction:string) {
        // setGuessedNumber(prevNumber=>prevNumber+1)
        if ((direction === 'lower' && guessedNumber < chosenNumber ) || (direction === 'higher' && guessedNumber > chosenNumber )) {
            Alert.alert("Dont lie", "You know that is wrong", [{text:'Sorry!', style:'cancel'}])
            return ;
        }
        if (direction === 'lower') {
            maxBoundary = guessedNumber;
        } else {
            minBoundary = guessedNumber + 1;
        }
        console.log('min is ' + minBoundary + ' and max is ' + maxBoundary)
        const newChosenNumber = generateRandomBetween(minBoundary, maxBoundary, guessedNumber);
        setGuessedNumber(newChosenNumber);
        // console.log('guessed number is: ' + guessedNumber);
    }

    // function subtract() {
    //     setGuessedNumber(prevNumber=>prevNumber-1)
    // }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.homeButton}>
                <PrimaryButton confirmHandler={onRtart}>Home</PrimaryButton>
            </View>
            <View style={styles.titleContainer}>
                <Title>Opponent's Guess</Title>
                <Title>Your bet is: {guessedNumber}</Title>
            </View>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <View style={styles.container}>
                <Text>Opponent's Guest</Text>
                <View>
                    <Text>Higher or lower?</Text>
                    <View style={styles.guessButtonsContainer}>
                        <View style={styles.guessButtons}>
                            <PrimaryButton confirmHandler={add.bind(this, 'lower')}>-</PrimaryButton>
                        </View>
                        <View style={styles.guessButtons}>
                            <PrimaryButton confirmHandler={add.bind(this, 'higher')}>+</PrimaryButton>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        padding:12,
    },
    titleContainer:{
        borderWidth: 2,
        borderColor:'white',
        borderRadius:10,
    },
    homeButton: {
        marginTop:50,
        alignItems:'flex-start',
    },
    container:{
        // padding:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    guessButtonsContainer: {
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
    },
    guessButtons: {
        // flex:1,
        width:60,
        // alignItems:'center',
    },
})
