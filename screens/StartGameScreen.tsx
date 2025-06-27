import React, { ReactNode, useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title';

import Colors from '../utils/colors';

type startGameProps = {
    onConfirmNumber:(pickedNumber:number)=>void;
}

export default function StartGameScreen({ onConfirmNumber } : startGameProps) {


    const [enteredNumber, setEnteredNumber] = useState('');
    function nbInputHandler(enteredText:string) {
        setEnteredNumber(enteredText);
        console.log(Number(enteredNumber) * 2);
    }

    function confirInputNumber() {
        const chosenNumber = Number(enteredNumber);
        console.log('chosen number is: ' + chosenNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Error',
                'Wrong input',
                [{text:'Okay', style:'destructive', onPress:clearInputNumber}],
            );
            return ;
        }
        onConfirmNumber(chosenNumber);
    }

    function clearInputNumber() {
        setEnteredNumber('');
    }

    return (
        <View>
            <View style={styles.titleContainer}>
                <Title>Guess my Number</Title>
            </View>
            <View style={styles.container}>
                <Text style={styles.intructionsText}>Enter a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={nbInputHandler}
                    />
                <View style={styles.buttonsOutside}>
                    <View style={styles.buttonsInside}>
                        <PrimaryButton
                            confirmHandler={clearInputNumber}
                            >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonsInside}>
                        <PrimaryButton
                            confirmHandler={confirInputNumber}
                            >Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius: 8,
        // shadow props. Elevation is only used for android
        elevation: 4,
        shadowColor:'black',
        shadowOffset:{width: 2000, height: 200},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput:{
        // flex:1,
        height:60,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.yeallow1,
        borderBottomWidth:2,
        color:Colors.yeallow1,
        marginVertical:10,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsOutside:{
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonsInside:{
        // flex:1,
        width:100,
    },
    titleContainer:{
        // flex:1,
        padding:8,
        marginVertical:100,
        borderWidth: 2,
        borderColor:'white',
        borderRadius:10,
        alignItems:'center',
    },
    intructionsText:{
        fontSize:22,
        color:Colors.yeallow1,
    },
})

