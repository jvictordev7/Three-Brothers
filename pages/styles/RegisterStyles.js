import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circle: {
    width: 700, // Largura do círculo
    height: 700, // Altura do círculo
    borderRadius: 300, // Metade da largura/altura para formar o círculo
    backgroundColor: "#000", // Cor do círculo
    justifyContent: "center", // Centraliza a logo dentro do círculo
    alignItems: "center", // Centraliza a logo dentro do círculo
    position: "absolute", // Permite posicionamento absoluto
    top: -510, // Move o círculo para cima
    // right: -300, // Move o círculo para a direita
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
    top: -80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backText: {
    color: "#000",
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  footer: {
    flexDirection: "column", // Empilha os elementos verticalmente
    justifyContent: "center", // Centraliza os elementos verticalmente
    alignItems: "center", // Centraliza os elementos horizontalmente
    width: "80%",
    marginTop: 20,
  },
  footerText: {
    color: "#000",
    fontSize: 14,
    textDecorationLine: "underline",
    top: -170,
  },
  footerCreatedBy: {
    position: "absolute", // Posiciona o rodapé na parte inferior
    bottom: 10, // Distância da parte inferior da tela
    alignItems: "center", // Centraliza o texto horizontalmente
    width: "100%", // Faz o rodapé ocupar toda a largura
  },
  footerCreatedByText: {
    fontSize: 12, // Tamanho da fonte
    color: "#000", // Cor do texto
    textAlign: "center", // Centraliza o texto
  },
});

export default styles;