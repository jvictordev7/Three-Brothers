import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/HomeStyles.js";

export default function Home({ navigation }) {
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
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerText}><Text></Text>Ainda não tem conta?  Cadastrar</Text>
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