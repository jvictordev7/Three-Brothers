import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles/RegisterStyles";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>

        <View style={styles.circle}></View>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Cadastrar</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
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