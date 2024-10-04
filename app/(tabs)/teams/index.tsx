import { StyleSheet, Text, View } from "react-native";

const TeamsScreen=()=>(
    <View style={styles.container}>
        <Text style={styles.text}>Teams Screen</Text>
    </View>

);

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        textAlign: "center",
        fontSize:24,
    }
});
export default TeamsScreen;