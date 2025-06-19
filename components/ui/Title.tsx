import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../utils/colors";

type titleProps = {
    children:ReactNode;
}

export default function Title(props:titleProps) {

    return (
        <Text style={styles.title}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        padding:12,
    },
    titleContainer:{
        borderWidth: 2,
        borderColor:Colors.yeallow1,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        alignItems:'stretch',
    },
})