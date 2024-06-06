import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import "react-native-reanimated";
import Constants from "expo-constants";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    nanum300: require("../assets/fonts/NanumSquareRoundL.ttf"),
    nanum400: require("../assets/fonts/NanumSquareRoundR.ttf"),
    nanum500: require("../assets/fonts/NanumSquareRoundB.ttf"),
    nanum700: require("../assets/fonts/NanumSquareRoundEB.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return <StatusBar style="auto" />;
  return (
    <ThemeProvider value={DarkTheme}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar style="light" translucent />
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
      </View>
    </ThemeProvider>
  );
}
