import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';


import Colors from '../../utils/colors';

type PrimaryButtonProps = {
    children:ReactNode;
    confirmHandler:()=>void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    function pressHandler() {
        console.log('clicked di button')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                    ? [styles.buttonInnerContainer, styles.Pressed]
                    : styles.buttonInnerContainer
                }
                onPress={props.confirmHandler}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        elevation: 2,
        overflow:'hidden',
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation: 2,
    },
    buttonText: {
        color:'white',
        textAlign:'center',
    },
    Pressed:{
        opacity:0.75,
    },
})
