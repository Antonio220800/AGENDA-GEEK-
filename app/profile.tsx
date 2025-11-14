import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
    Image,
    LayoutAnimation,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY_COLOR = '#2F67E6';

// Habilita animações no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top + 10 }]}>
        {/* Header com botão de voltar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            router.back();
          }} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Simon Paz</Text>

          <TouchableOpacity>
            <Feather name="settings" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Foto de perfil e nome */}
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://i.imgur.com/yourProfileImage.png' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Simon Paz</Text>
          <Text style={styles.pronouns}>ele/dele</Text>
          <Text style={styles.bio}>Jogador de RPG de mesa e Gamer.</Text>

          {/* Botão de edição */}
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-2" size={16} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.editText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Contadores */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Publicações</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Amigos</Text>
          </View>
        </View>

        {/* Cards de postagens vazias */}
        <View style={styles.postsSection}>
          <Text style={styles.postsTitle}>Publicações</Text>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.postCard}>
              <Feather name="image" size={40} color="#ccc" />
              <Text style={styles.postPlaceholder}>Post vazio</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pronouns: {
    fontSize: 14,
    color: '#666',
  },
  bio: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 12,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  postsSection: {
    paddingVertical: 20,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  postCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  postPlaceholder: {
    marginTop: 8,
    color: '#aaa',
    fontSize: 14,
  },
});
