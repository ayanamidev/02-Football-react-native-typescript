import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {z}from 'zod';

const formSchema=z.object({
    email:z.string().email("Please enter a valid email address"),
    password: z.string().min(6,"Password must be a least 6 characters long")
});

const LoginFormScreen=()=>(
    <View style={styles.container}>
        <Text style={styles.text}>
        Login
        </Text>
        <TextInput style={styles.input} inputMode="email" placeholder="Enter your email" />
        <TextInput style={styles.input} inputMode="text" placeholder="Enter yout password" secureTextEntry={true}/>
    </View>
);

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
    },
    text:{
        textAlign:"center",
        fontSize:24,

    },
    input:{
        borderColor:"blue",
        borderWidth:3,
        padding:10,
        width:200,
    
    }
});

export default LoginFormScreen;