import {Controller} from "react-hook-form";
import { TextInput, View, Text, StyleSheet } from "react-native";


type FormInputProps = {
    control: any,
    name: string,
    [key: string]: any
};


const FormInput: React.FC<FormInputProps> = ({control,name, ...otherProps})=>(
    <Controller
    control={control}
    name={name}
    render={({field:{value,onChange,onBlur},fieldState:{ error } })=>(
        <View style={styles.container}>
            <TextInput style={styles.TextInput} value={value} onChangeText={onChange} onBlur={onBlur} {...otherProps}/>
            {error && <Text style={styles.error} >{error.message}</Text>}
        </View>
    )}
/>  
);



const styles = StyleSheet.create({
    container: {
        gap:20,
        width:"100%",
    },
    TextInput: {
        borderWidth:1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
    },
    error: {
        color: "red",
        fontWeight: "bold",
    }
})

export default FormInput;