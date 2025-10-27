import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR, // Cor do ícone ativo (azul)
        tabBarInactiveTintColor: '#999',     // Cor do ícone inativo (cinza claro)
        tabBarStyle: {
            backgroundColor: '#fff',         // Fundo branco
            borderTopWidth: 1,
            borderTopColor: '#eee',          // Linha de separação discreta
            height: 60,                      // Altura um pouco maior
            paddingBottom: 5,
            paddingTop: 5,
        },
        headerShown: false, // Oculta o header padrão em todas as telas de tabs
      }}>
      
      {/* Configuração da Tab Home */}
      <Tabs.Screen
        name="index" // O arquivo index.tsx é a Home
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      
      {/* Configuração da Tab Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => <Feather name="compass" size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}