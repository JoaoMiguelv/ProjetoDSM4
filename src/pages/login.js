import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleLogin = () => {
        // Implementar lógica de login
        console.log(`Email: ${email} - Password: ${password}`);
        if (email === 'admin' && password === '123') {
            navigation.navigate('Main')
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    input: {
        width: '80%',
        borderColor: "#CCC",
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginVertical: 10
    },
    button: {
        width: "80%",
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold"
    }
});

export default Login;