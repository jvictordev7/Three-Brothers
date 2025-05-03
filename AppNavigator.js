import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Ícones para o menu inferior
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Menu inferior com abas
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Crie seu modelo") {
            iconName = "create-outline"; // Ícone para "Crie seu modelo"
          } else if (route.name === "Futebol") {
            iconName = "football-outline"; // Ícone para "Futebol"
          } else if (route.name === "Vôlei") {
            iconName = "volleyball-outline"; // Ícone para "Vôlei"
          } else if (route.name === "Basquete") {
            iconName = "basketball-outline"; // Ícone para "Basquete"
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000", // Cor do ícone ativo
        tabBarInactiveTintColor: "gray", // Cor do ícone inativo
      })}
    >
      <Tab.Screen name="Crie seu modelo" component={Home} />
      <Tab.Screen name="Futebol" component={Home} />
      <Tab.Screen name="Vôlei" component={Home} />
      <Tab.Screen name="Basquete" component={Home} />
    </Tab.Navigator>
  );
}

// Configuração principal do navegador
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}