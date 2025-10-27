import React from 'react';
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// IMPORTANTE: Adicionamos useLocalSearchParams
import { Feather } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams } from 'expo-router';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6'; 

export default function EventDetailsScreen() {
  
  // RECEBENDO DADOS!
  const params = useLocalSearchParams();
  // Pega o título ou usa um valor padrão se nada for enviado
  const eventTitle = params.eventTitle || "Detalhes do Evento Desconhecido"; 
  
  const handleGoBack = () => {
    router.back(); 
  };

  return (
    <View style={styles.container}>
      
      {/* 1. CONFIGURAÇÃO DO HEADER */}
      <Stack.Screen 
        options={{ 
          headerShown: false, 
        }} 
      />

      {/* 2. ÁREA DA IMAGEM E BOTÃO VOLTAR/COMPARTILHAR */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/400x250/0000FF/FFFFFF?text=DETALHES+EVENTO+BANNER' }} 
          style={styles.eventImage} 
        />
        
        {/* Botão de Voltar Personalizado */}
        <TouchableOpacity style={[styles.controlButton, { left: 10, top: (Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 50) }]} onPress={handleGoBack}>
          <Feather name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        
        {/* Botão de Compartilhar/Favoritar (Exemplo) */}
        <TouchableOpacity style={[styles.controlButton, { right: 10, top: (Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 50) }]}>
          <Feather name="share-2" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* 3. CONTEÚDO SCROLLABLE DO EVENTO */}
      <ScrollView style={styles.detailsScroll}>
        <View style={styles.detailsBody}>
          
          {/* USANDO OS DADOS RECEBIDOS! */}
          <Text style={styles.eventTitle}>{eventTitle}</Text> 
          
          <Text style={styles.eventPrice}>GRÁTIS</Text>
          
          <Text style={styles.sectionTitle}>SOBRE O EVENTO</Text>
          <Text style={styles.descriptionText}>
            Prepare-se para dois dias épicos de programação local e nacional no Centro de Convenções de Maceió. Será uma festa imperdível com áreas temáticas, campeonatos de e-sports, bate-papos com dubladores e muito mais. Não perca a maior experiência Geek que você já viu!
          </Text>

          <Text style={styles.sectionTitle}>DETALHES E INFORMAÇÕES</Text>
          <View style={styles.infoRow}>
            <Feather name="calendar" size={18} color={PRIMARY_COLOR} />
            <Text style={styles.infoText}>Data: 05 de Outubro de 2025</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="clock" size={18} color={PRIMARY_COLOR} />
            <Text style={styles.infoText}>Horário: A partir das 10:00h</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="map-pin" size={18} color={PRIMARY_COLOR} />
            <Text style={styles.infoText}>Local: Centro de Convenções Maceió</Text>
          </View>
          <View style={styles.infoRow}>
            <Feather name="users" size={18} color={PRIMARY_COLOR} />
            <Text style={styles.infoText}>Estimativa: Até 500 pessoas</Text>
          </View>

          {/* Área de Botão de Ação */}
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>GARANTIR MEU INGRESSO GRÁTIS</Text>
          </TouchableOpacity>
          
          <View style={{ height: 50 }} /> 
          
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 250, 
    width: '100%',
  },
  eventImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  controlButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
  detailsScroll: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  detailsBody: {
    padding: 20,
    backgroundColor: '#fff', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    marginTop: -20, 
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  descriptionText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  ctaButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});