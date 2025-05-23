import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Alinha o conteúdo ao topo
    alignItems: "center",
    paddingTop: 50, // Espaçamento no topo
    backgroundColor: "#fff", // Cor de fundo branca
  },
  inputContainer: {
    justifyContent: "center", // Centraliza os inputs verticalmente
    alignItems: "center", // Centraliza os inputs horizontalmente
    width: "100%", // Garante que o contêiner ocupe toda a largura
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
    marginBottom: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 70,
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
    top: -60, // Ajuste a posição vertical do input
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    top: -60, // Ajuste a posição vertical do botão
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row", // Coloca os elementos lado a lado
    justifyContent: "space-between", // Espaça os elementos igualmente
    alignItems: "center", // Centraliza os elementos verticalmente
    width: "80%",
    marginTop: -50, // Ajuste o espaçamento abaixo do botão "Entrar"
},
footerText: {
    color: "#000",
    fontSize: 14,
    textDecorationLine: "underline",
    marginHorizontal: 20, // Adiciona espaçamento horizontal
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