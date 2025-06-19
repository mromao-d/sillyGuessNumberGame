import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

type GameOverProps = {
    onRestart: ()=>void;
}

export default function GameOverScreen(props: GameOverProps) {
    return(
        <>
            <View style={styles.homeButton}>
                <PrimaryButton confirmHandler={props.onRestart}>Home</PrimaryButton>
            </View>
            <View style={styles.container}>
                <Text>Game is Over</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    homeButton: {
        marginTop:50,
        alignItems:'flex-start',
    },
})
