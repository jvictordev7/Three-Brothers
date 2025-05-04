import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#fff", // Fundo branco
  },
  text: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: "bold", // Texto em negrito
    color: "#000", // Cor do texto
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  arrowRight: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  arrowIcon: {
    width: 40,
    height: 40,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#000", // Cor azul
    borderRadius: 5,
    alignItems: "center", // Centraliza o texto no botão
    justifyContent: "center", // Centraliza o texto no botão
  },
  buttonText: {
    color: "#fff", // Texto branco
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: "100%", // Garante que o contêiner ocupe toda a tela
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    width: 100,
    height: 100,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },



  cartContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;