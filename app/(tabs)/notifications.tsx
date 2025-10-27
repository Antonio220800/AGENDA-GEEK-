import { Feather } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6'; 

export default function NotificationsScreen() {
  
  const handleGoBack = () => {
    // Volta para a tela anterior
    router.back(); 
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Configuração do Cabeçalho da Tela (sem a Tab Bar inferior) */}
      <Stack.Screen 
        options={{ 
          title: 'Notificações',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: PRIMARY_COLOR },
          headerTintColor: '#fff', 
          
          // Botão de Voltar Personalizado:
          headerLeft: () => (
            <TouchableOpacity onPress={handleGoBack} style={{ marginLeft: 5 }}>
              <Feather name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          // Botão Direito (Limpar Notificações)
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Notificações Limpas!')} style={{ marginRight: 5 }}>
              <Feather name="trash-2" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }} 
      />
      
      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentPadding}>

        <Text style={styles.emptyText}>Você não tem novas notificações.</Text>
        <Text style={styles.subText}>Fique de olho em eventos e mensagens do Agenda Geek!</Text>
        
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
  },
  contentScroll: {
    flex: 1, 
    backgroundColor: '#f5f5f5', 
  },
  contentPadding: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});