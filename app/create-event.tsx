import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleCreate = () => {
    console.log('Evento criado:', { title, desc, date, location, capacity });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Criar Evento</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, { height: 120 }]}
          placeholder="Descrição"
          value={desc}
          multiline
          onChangeText={setDesc}
        />

        <TextInput
          style={styles.input}
          placeholder="Data e hora (ex.: 05/10/2025, 10:00)"
          value={date}
          onChangeText={setDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Local do evento"
          value={location}
          onChangeText={setLocation}
        />

        <TextInput
          style={styles.input}
          placeholder="Capacidade máxima"
          keyboardType="numeric"
          value={capacity}
          onChangeText={setCapacity}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Criar Evento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2F67E6',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
