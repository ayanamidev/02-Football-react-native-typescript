import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({text, onPress})=>(
    <Pressable onPress={onPress} style = {styles.button}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    button:{
        backgroundColor:"blue",
        padding:10,
        borderRadius:10,
    },
    text: {
        color:"white",
        textAlign: "center",
    }
});

export default Button;