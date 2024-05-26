import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    nanum300: require("../assets/fonts/NanumSquareRoundL.ttf"),
    nanum400: require("../assets/fonts/NanumSquareRoundR.ttf"),
    nanum500: require("../assets/fonts/NanumSquareRoundB.ttf"),
    nanum700: require("../assets/fonts/NanumSquareRoundEB.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: {
            paddingTop: Constants.statusBarHeight,
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
