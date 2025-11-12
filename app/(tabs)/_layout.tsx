import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Cor principal (azul) do seu projeto
const PRIMARY_COLOR = '#2F67E6';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  // calcula altura e padding levando em conta a safe area inferior
  const TAB_BAR_HEIGHT = 60 + (insets.bottom ?? 0);
  const TAB_BAR_PADDING_BOTTOM = insets.bottom ?? 8;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: TAB_BAR_HEIGHT,
          paddingBottom: TAB_BAR_PADDING_BOTTOM,
          paddingTop: 5,
          position: 'absolute', // melhora estabilidade visual em algumas transições
          left: 0,
          right: 0,
          // evita sombras entre sobreposições em Android
          elevation: 8,
          // pequena elevação no iOS
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.04,
          shadowRadius: 4,
        },
        headerShown: false,
        // evita que a aba seja "coberta" por gestos de navegação no Android em telas com gesto
        // (só leitura; não altera comportamento de gesto)
        gestureEnabled: true,
      }}
    >
      {/* Configuração da Tab Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />

      {/* Configuração da Tab Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => <Feather name="compass" size={24} color={color} />,
        }}
      />

      {/* Nova Tab Notificações */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />,
          // se quiser badge dinâmico: tabBarBadge: notificationsCount
        }}
      />
    </Tabs>
  );
}
