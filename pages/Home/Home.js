import React from "react";
import { View, Text } from "react-native";
import styles from "./styles/HomeStyles"; // Importa os estilos

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conteúdo da aba</Text>
    </View>
  );
}