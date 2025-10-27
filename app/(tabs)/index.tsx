import { Feather } from '@expo/vector-icons';
import { Stack, router } from 'expo-router'; 
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

import EventCard from '../../components/EventCard';

const PRIMARY_COLOR = '#2F67E6'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Oculta o cabeçalho padrão do Expo Router */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* 2. HEADER CUSTOMIZADO */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Ícone de usuário com margem */}
          <Feather name="user" size={24} color="#fff" style={{ marginRight: 10 }} />
          <Text style={styles.headerTitle}>Agenda Geek</Text>
        </View>
        <View style={styles.headerRight}>
          
          {/* Ícone de Notificações (Já conectado, se você fez o passo anterior) */}
          <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => router.push('notifications')}
          >
            <Feather name="bell" size={24} color="#fff" />
          </TouchableOpacity>

          {/* ÍCONE DE CRIAÇÃO DE EVENTO (AGORA CONECTADO) */}
          <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => router.push('create-event')} 
          >
            <Feather name="shopping-bag" size={24} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconContainer}>
            <Feather name="users" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* 3. CONTEÚDO PRINCIPAL (Permite Scroll) */}
      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentPadding}>

        {/* SEÇÃO DE FILTROS */}
        <View style={styles.filtersContainer}>
          <View style={styles.filterTitleRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="funnel" size={18} color="#333" />
                <Text style={styles.filterTitleText}>Filtros</Text>
            </View>
            <Text style={styles.filterCityText}>Maceió</Text>
          </View>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#777" style={{ marginRight: 8 }} />
            <Text style={styles.searchText}>Buscar Eventos...</Text>
          </View>
        </View>
        
        {/* ESPAÇO DO FEED - CARDS DE EVENTOS */}
        <EventCard />
        <EventCard />
        <EventCard />

      </ScrollView>
    </SafeAreaView>
  );
}

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
    padding: 10,
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
  filtersContainer: {
    width: '100%',
    backgroundColor: '#EBEBEB', 
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  filterTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 10,
  },
  filterTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  filterCityText: {
    fontSize: 14,
    color: PRIMARY_COLOR, 
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD', 
  },
  searchText: {
    color: '#777',
    fontSize: 16,
  },
});