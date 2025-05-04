import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native"; // Importa o hook para acessar a rota atual
import styles from "./styles/HomeStyles"; // Importa os estilos

export default function Home() {
  const route = useRoute(); // Obtém informações sobre a rota atual

  console.log("Aba atual:", route.name);

  // URLs das imagens para cada aba
  const futebolImages = [
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/imgtest1_gd8e3z",
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/imgtest2_hbejjk",
  ];

  const voleiImages = [
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/vo3_gawi9x.png",
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/vo1_gs1yau.png",
  ];

  const basqueteImages = [
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/bas2_lqt9pb.png",
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/bas1_emy9ab.png",
  ];

  const criarCamisetaImage = [
    "https://res.cloudinary.com/dwdfigkzy/image/upload/v1234567890/criarp_hxj8i4.png",
  ];

  // Determina as imagens com base na aba atual
  const images =
    route.name === "Futebol"
      ? futebolImages
      : route.name === "Vôlei"
      ? voleiImages
      : route.name === "Basquete"
      ? basqueteImages
      : criarCamisetaImage;

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para controlar a imagem atual
  const [cart, setCart] = useState([]); // Estado para armazenar os itens do carrinho

  // Função para ir para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para ir para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Função para adicionar a imagem atual ao carrinho
  const addToCart = () => {
    const currentImage = images[currentImageIndex];
    setCart((prevCart) => [...prevCart, currentImage]);
  };

  return (
    <View style={styles.container}>
      {/* Ícone do Carrinho */}
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => alert("Carrinho: " + cart.length + " itens")}>
          <Image
            source={require("../../assets/cart-icon.png")} // Ícone do carrinho
            style={styles.cartIcon}
          />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Imagem Atual */}
      <Image
        source={{ uri: images[currentImageIndex] }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Botões de Navegação */}
      <TouchableOpacity style={styles.arrowLeft} onPress={prevImage}>
        <Image
          source={require("../../assets/left-arrow.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={nextImage}>
        <Image
          source={require("../../assets/right-arrow.png")}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {/* Botão para Adicionar ao Carrinho */}
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}