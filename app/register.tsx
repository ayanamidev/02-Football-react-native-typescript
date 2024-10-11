import Button from "@/components/Button";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { z } from "zod";
//npm install react-hook-form
//npm install @hookform/resolvers
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/FormInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be a least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Password must be a least 6 characters long"),
});

const RegisterFormScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (formData.email == "admin@liceolapaz.net") {
      Alert.alert("User already exists");
    } else if (formData.password != formData.confirmPassword) {
      Alert.alert("Password dont´t match");
    } else {
      await AsyncStorage.setItem("userEmail", formData.email);
      router.push("/teams");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <FormInput
        control={control}
        name="email"
        autoCapitalize="none" //no letra mayus
        autoComplete="email" // te sugiere los emails que hayas puesto
        inputMode="email"
        placeholder="Enter your email"
      />
      <FormInput
        control={control}
        name="password"
        autoCapitalize="none" //
        inputMode="text"
        placeholder="Enter your password"
        secureTextEntry={true} //tambien se pueden poner oslo el nombre, cuando son true y false(scureTextEntry seria ya true)
      />
      <FormInput
        control={control}
        name="confirmPassword"
        autoCapitalize="none" //
        inputMode="text"
        placeholder="Repeat your password"
        secureTextEntry={true} //tambien se pueden poner oslo el nombre, cuando son true y false(scureTextEntry seria ya true)
      />
      <Link href="/" style={styles.link}>
        Already have account? Login here
      </Link>
      <Button onPress={handleSubmit(onSubmit)} text="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  input: {
    borderColor: "blue",
    borderWidth: 3,
    padding: 10,
    width: 200,
  },
  link: {
    color: "blue",
  },
});

export default RegisterFormScreen;
