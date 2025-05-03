import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles/RegisterStyles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Importa o auth do Firebase

export default function Register({ navigation }) {
  const [email, setEmail] = useState(""); // Estado para o e-mail
  const [password, setPassword] = useState(""); // Estado para a senha

  const handleRegister = async () => {
    try {
      // Tenta criar um novo usuário com Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      // Redireciona para a tela de login
      navigation.goBack();
    } catch (error) {
      // Exibe o erro caso o registro falhe
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Cadastrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      {/* Rodapé com o texto "Criado por João Victor" */}
      <View style={styles.footerCreatedBy}>
        <Text style={styles.footerCreatedByText}>Desenvolvido por João Victor</Text>
      </View>
    </View>
  );
}