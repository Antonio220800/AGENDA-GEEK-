import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const PRIMARY_COLOR = '#2F67E6';

export default function EventCard({ event }) {
  // Estado para o favorito
  const [isFavorite, setIsFavorite] = useState(false);

  // Alterna o estado ao clicar no coração
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => router.push(`/details?eventId=${event?.id}`)}
    >
      {/* Imagem do evento */}
      <Image
        source={{ uri: event?.image || 'https://via.placeholder.com/400x200.png?text=Evento' }}
        style={styles.image}
      />

      {/* Ícone de favorito */}
      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Feather
          name="heart"
          size={26}
          color={isFavorite ? 'red' : '#ccc'}
          fill={isFavorite ? 'red' : 'none'}
        />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.title}>{event?.title || 'Cultura Nerd 2025'}</Text>
        <Text style={styles.description}>
          {event?.description ||
            'Serão dois dias de programação local e nacional. Uma festa para vivenciar a maior experiência Geek!'}
        </Text>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Feather name="calendar" size={16} color="#555" />
            <Text style={styles.detailText}>05/10/2025, 10:00</Text>
          </View>

          <View style={styles.detailItem}>
            <Feather name="map-pin" size={16} color="#555" />
            <Text style={styles.detailText}>CENTRO DE CONVENÇÕES MACEIÓ</Text>
          </View>

          <View style={styles.detailItem}>
            <Feather name="users" size={16} color="#555" />
            <Text style={styles.detailText}>Até 500 pessoas</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.freeBadge}>GRÁTIS</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 160,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 6,
    elevation: 4,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    color: '#666',
    marginTop: 6,
    marginBottom: 10,
  },
  details: {
    marginTop: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 6,
    color: '#555',
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  freeBadge: {
    backgroundColor: '#DFFFD8',
    color: 'green',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 13,
  },
});
