import { Feather } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  LayoutAnimation,
  UIManager,
  Platform as RNPlatform,
} from 'react-native';

import EventCard from '../../components/EventCard';

const PRIMARY_COLOR = '#2F67E6';

// Habilita animações de layout no Android
if (RNPlatform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'Todos'|'Jogos'|'RPG'|'Eventos'|'Cosplay'|'Anime'|'Quadrinhos'>('Todos');
  const [datePlaceholder, setDatePlaceholder] = useState('dd/mm/aaaa');

  function toggleFilters() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFiltersOpen(prev => !prev);
  }

  function selectCategory(cat: typeof selectedCategory) {
    setSelectedCategory(cat);
    // opcional: fechar após seleção
    // setFiltersOpen(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Feather name="user" size={24} color="#fff" style={{ marginRight: 10 }} />
          <Text style={styles.headerTitle}>Agenda Geek</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => router.push('notifications')}
          >
            <Feather name="bell" size={24} color="#fff" />
          </TouchableOpacity>

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

      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentPadding}>
        {/* FILTROS */}
        <View style={styles.filtersContainer}>
          <Pressable onPress={toggleFilters} style={styles.filterTitleRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="filter" size={18} color="#333" />
              <Text style={styles.filterTitleText}>Filtros</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.filterCityText}>Maceió</Text>
              <Feather
                name={filtersOpen ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#333"
                style={{ marginLeft: 8 }}
              />
            </View>
          </Pressable>

          {/* Área expansível */}
          {filtersOpen && (
            <View style={styles.expandedFilters}>
              {/* Search bar */}
              <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#777" style={{ marginRight: 8 }} />
                <Text style={styles.searchText}>Buscar Eventos...</Text>
              </View>

              {/* Date selector (simples placeholder) */}
              <TouchableOpacity style={styles.inlineControl} onPress={() => {/* implementar picker */}}>
                <Text style={styles.inlineLabel}>Data</Text>
                <Text style={styles.inlineValue}>{datePlaceholder}</Text>
              </TouchableOpacity>

              {/* Category selector */}
              <View style={styles.categoryRow}>
                {['Todos','Jogos','RPG','Eventos','Cosplay','Anime','Quadrinhos'].map(cat => {
                  const active = cat === selectedCategory;
                  return (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => selectCategory(cat as any)}
                      style={[styles.categoryPill, active && styles.categoryPillActive]}
                    >
                      <Text style={[styles.categoryText, active && styles.categoryTextActive]}>{cat}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Botões de ação */}
              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    setSelectedCategory('Todos');
                    setDatePlaceholder('dd/mm/aaaa');
                  }}
                >
                  <Text style={styles.clearText}>Limpar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.applyButton}
                  onPress={() => {
                    // aplicar filtros reais aqui
                    toggleFilters();
                  }}
                >
                  <Text style={styles.applyText}>Aplicar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* FEED - CARDS DE EVENTOS */}
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
    padding: 12,
    marginBottom: 20,
  },
  filterTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  filterTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  filterCityText: {
    fontSize: 14,
    color: PRIMARY_COLOR,
    fontWeight: '600',
  },

  expandedFilters: {
    marginTop: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
  searchText: {
    color: '#777',
    fontSize: 16,
  },

  inlineControl: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineLabel: {
    color: '#333',
    fontWeight: '600',
  },
  inlineValue: {
    color: '#777',
  },

  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  categoryPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 8,
    marginBottom: 8,
  },
  categoryPillActive: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#fff',
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  clearText: {
    color: '#333',
    fontWeight: '600',
  },
  applyButton: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
  },
});
