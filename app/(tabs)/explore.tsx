import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const PRIMARY_COLOR = '#2F67E6';

// Exemplo de eventos
const eventos = [
  { id: '1', titulo: 'Anime Friends', categoria: 'Anime' },
  { id: '2', titulo: 'Brasil Game Show', categoria: 'Games' },
  { id: '3', titulo: 'Comic Con Experience', categoria: 'Séries' },
  { id: '4', titulo: 'Festival Geek', categoria: 'Filmes' },
  { id: '5', titulo: 'Game XP', categoria: 'Games' },
];

// Categorias disponíveis
const categorias = ['Todos', 'Anime', 'Games', 'Séries', 'Filmes'];

export default function ExploreScreen() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Filtra eventos conforme a categoria
  const eventosFiltrados =
    categoriaSelecionada === 'Todos'
      ? eventos
      : eventos.filter((e) => e.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorar</Text>
        <TouchableOpacity onPress={() => router.push('favorites')}>
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filtro por categoria */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriasContainer}
      >
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoriaBotao,
              categoriaSelecionada === cat && styles.categoriaSelecionada,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text
              style={[
                styles.categoriaTexto,
                categoriaSelecionada === cat && styles.categoriaTextoSelecionado,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de eventos */}
      <FlatList
        data={eventosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.eventoCard}>
            <Text style={styles.eventoTitulo}>{item.titulo}</Text>
            <Text style={styles.eventoCategoria}>{item.categoria}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    paddingTop: 40,
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoriasContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  categoriaBotao: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoriaSelecionada: {
    backgroundColor: PRIMARY_COLOR,
  },
  categoriaTexto: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  categoriaTextoSelecionado: {
    color: '#fff',
  },
  eventoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  eventoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  eventoCategoria: {
    color: '#666',
    marginTop: 4,
  },
});
