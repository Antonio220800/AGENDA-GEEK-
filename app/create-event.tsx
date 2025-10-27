import { Feather } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6'; 

export default function CreateEventScreen() {
  
  const handleGoBack = () => {
    // Volta para a tela anterior (Home ou Explorar)
    router.back(); 
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Configuração do Cabeçalho com o botão Voltar */}
      <Stack.Screen 
        options={{ 
          title: 'Criar Novo Evento',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: PRIMARY_COLOR },
          headerTintColor: '#fff', // Cor do texto e ícones
          
          // Botão de Voltar Personalizado:
          headerLeft: () => (
            <TouchableOpacity onPress={handleGoBack} style={{ marginLeft: 5 }}>
              <Feather name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          // Botão Direito (Opcional, ex: Publicar)
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Evento Pronto para Publicar!')} style={{ marginRight: 5 }}>
              <Feather name="send" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }} 
      />
      
      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentPadding}>

        <Text style={styles.sectionTitle}>DETALHES DO EVENTO</Text>

        {/* Campos de Formulário */}
        <TextInput style={styles.input} placeholder="Nome do Evento" />
        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Descrição detalhada do evento" 
          multiline={true}
          numberOfLines={4}
        />
        <TextInput style={styles.input} placeholder="Data e Hora (ex: 05/10/2026, 10:00)" />
        <TextInput style={styles.input} placeholder="Local (ex: Centro de Convenções Maceió)" />
        <TextInput style={styles.input} placeholder="Preço (ex: GRÁTIS ou R$ 50,00)" />
        
        {/* Botão de Adicionar Foto */}
        <TouchableOpacity style={styles.photoButton}>
          <Feather name="camera" size={24} color="#fff" />
          <Text style={styles.photoButtonText}>ADICIONAR CAPA DO EVENTO</Text>
        </TouchableOpacity>

        {/* Botão Principal de Ação */}
        <TouchableOpacity style={styles.publishButton}>
            <Text style={styles.publishButtonText}>REVISAR E PUBLICAR</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
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
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  photoButton: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 25,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  publishButton: {
    backgroundColor: '#1E46A0', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});