import { View, Text, StyleSheet } from "react-native"
import { ReactNode } from "react";
import Colors from "../../utils/colors";

type NumberContainerProps = {
    children:ReactNode;
}

export default function NumberContainer(props: NumberContainerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yeallow1,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.yeallow1,
        fontSize: 36,
        fontWeight: 'bold',
    },
})
