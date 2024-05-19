const IS_DEV = process.env.APP_VARIANT !== "production";

export default {
  expo: {
    name: IS_DEV ? "kris-dev" : "kris",
    slug: "kris",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#080000",
    },
    ios: {
      supportsTablet: true,
      // googleSercivesFile: "./GoogleService-Info.plist",
      bundleIdentifier: IS_DEV ? "com.kris.dev" : "com.kris",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#080000",
      },
      // googleServicesFile: "./google-services.json",
      package: IS_DEV ? "com.kris.dev" : "com.kris",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "135bfaa0-d1e1-4dd1-8c13-1b02b77de7df",
      },
    },
    owner: "kr-is",
  },
};
