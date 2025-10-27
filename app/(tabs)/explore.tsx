import { Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6'; 

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Oculta o cabeçalho padrão do Expo Router */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* 2. HEADER CUSTOMIZADO (Idêntico ao da Home) */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Ícone de usuário com margem */}
          <Feather name="user" size={24} color="#fff" style={{ marginRight: 10 }} /> 
          <Text style={styles.headerTitle}>Agenda Geek</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="bell" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="shopping-bag" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="users" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* 3. CONTEÚDO PRINCIPAL DA EXPLORAÇÃO (Permite Scroll) */}
      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentPadding}>

        <Text style={styles.sectionTitle}>EXPLORE POR CATEGORIAS</Text>
        
        {/* CORRIGIDO: Ícones substituídos por nomes válidos no Feather Icons */}
        <View style={styles.categoryGrid}>
            <CategoryButton icon="book-open" title="Quadrinhos" />
            <CategoryButton icon="zap" title="Jogos" /> // Substituído 'gamepad'
            <CategoryButton icon="shield" title="RPG" /> // Substituído 'sword'
            <CategoryButton icon="gift" title="Cosplay" /> // Substituído 'tshirt'
            <CategoryButton icon="music" title="Música" />
            <CategoryButton icon="tv" title="Animes" />
        </View>
        
        <Text style={styles.sectionTitle}>EVENTOS EM ALTA</Text>
        <Text style={styles.placeholderText}>
            Aqui virão os cards de eventos em destaque na sua região.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

// Componente simples para os botões de categoria
const CategoryButton = ({ icon, title }) => (
    <TouchableOpacity style={categoryStyles.button}>
        <Feather name={icon} size={30} color={PRIMARY_COLOR} />
        <Text style={categoryStyles.text}>{title}</Text>
    </TouchableOpacity>
);


// Seção de Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  contentScroll: {
    flex: 1, 
    backgroundColor: '#f5f5f5', 
  },
  contentPadding: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 15,
  },
  placeholderText: {
    color: '#666',
    padding: 10,
    textAlign: 'center',
  },
  header: {
    backgroundColor: PRIMARY_COLOR, 
    height: 70, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 15,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  }
});

const categoryStyles = StyleSheet.create({
    button: {
        width: '30%', 
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 15,
        marginBottom: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 5,
        color: '#333',
    }
})