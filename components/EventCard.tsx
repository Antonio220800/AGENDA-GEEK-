import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PRIMARY_COLOR = '#2F67E6';

export default function EventCard() {
  // Dados simulados do evento
  const eventData = {
    id: 1,
    title: "Cultura Nerd 2025",
    price: "GRÁTIS",
    description:
      "Serão dois dias de programação local e nacional. Uma festa para vivenciar a maior experiência Geek que você já experimentou!",
    date: "05/10/2025, 10:00",
    location: "CENTRO DE CONVENÇÕES MACEIÓ",
    capacity: "Até 500 pessoas",
    ticketType: "Entrada livre", // Novo campo
    organizer: "Geek Maceió Produções", // Novo campo
    image:
      "https://via.placeholder.com/350x150/0000FF/FFFFFF?text=FESTIVAL+DA+CULTURA+NERD",
  };

  const handlePress = () => {
    router.push({
      pathname: "details",
      params: { eventTitle: eventData.title },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {/* IMAGEM */}
      <View>
        <Image source={{ uri: eventData.image }} style={styles.cardImage} />
        <TouchableOpacity style={styles.favoriteIcon}>
          <Feather name="heart" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.cardBody}>
        {/* Título e Preço */}
        <View style={styles.titleRow}>
          <Text style={styles.eventTitle} numberOfLines={1}>
            {eventData.title}
          </Text>
          <Text style={styles.eventPrice}>{eventData.price}</Text>
        </View>

        {/* Descrição */}
        <Text style={styles.eventDescription} numberOfLines={3}>
          {eventData.description}
        </Text>

        {/* Detalhes */}
        <View style={styles.detailsRow}>
          <Feather name="calendar" size={14} color="#666" />
          <Text style={styles.detailText}>{eventData.date}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Feather name="map-pin" size={14} color="#666" />
          <Text style={styles.detailText}>{eventData.location}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Feather name="users" size={14} color="#666" />
          <Text style={styles.detailText}>{eventData.capacity}</Text>
        </View>

        {/* NOVOS CAMPOS */}
        <View style={styles.detailsRow}>
          <Feather name="ticket" size={14} color="#666" />
          <Text style={styles.detailText}>Tipo de ingresso: {eventData.ticketType}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Feather name="user" size={14} color="#666" />
          <Text style={styles.detailText}>Organizador: {eventData.organizer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    padding: 5,
  },
  cardBody: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  eventPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#E6FFE6',
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 8,
  },
});
