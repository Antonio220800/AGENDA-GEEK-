import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";

// 🔹 Define qual tela abre primeiro
export const unstable_settings = {
  anchor: "splash", // começa na splash (que redireciona pro login)
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Tela inicial (Splash) */}
        <Stack.Screen name="splash" />

        {/* Telas de autenticação */}
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register-user" />
        <Stack.Screen name="(auth)/register-company" />
        <Stack.Screen name="(auth)/forgot-password" />

        {/* Telas principais (depois do login) */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="create-event" />
        <Stack.Screen name="details" />

        {/* Modal (caso use) */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
