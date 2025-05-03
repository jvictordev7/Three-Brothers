import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles/LoginStyles.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Importa o auth do Firebase

export default function Home({ navigation }) {
  const [email, setEmail] = useState(""); // Estado para o e-mail
  const [password, setPassword] = useState(""); // Estado para a senha

  const handleLogin = async () => {
    try {
      // Tenta autenticar o usuário com Firebase
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      // Redireciona para a tela Home
      navigation.navigate("Home");
    } catch (error) {
      // Exibe o erro caso a autenticação falhe
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>

      {/* Contêiner para centralizar os inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email} // Vincula o estado do e-mail
          onChangeText={setEmail} // Atualiza o estado do e-mail
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password} // Vincula o estado da senha
          onChangeText={setPassword} // Atualiza o estado da senha
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerText}><Text></Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.footerText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé com o texto "Criado por João Victor" */}
      <View style={styles.footerCreatedBy}>
        <Text style={styles.footerCreatedByText}>Desenvolvido por João Victor</Text>
      </View>
    </View>
  );
}