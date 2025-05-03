import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles/ForgotPasswordStyles";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Importa o auth do Firebase

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState(""); // Estado para o e-mail

  const handlePasswordReset = async () => {
    try {
      // Envia o e-mail de redefinição de senha
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Sucesso", "E-mail de redefinição de senha enviado!");
      // Redireciona para a tela de login
      navigation.goBack();
    } catch (error) {
      // Exibe o erro caso o envio falhe
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Esqueci a Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email} // Vincula o estado do e-mail
        onChangeText={setEmail} // Atualiza o estado do e-mail
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Enviar</Text>
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