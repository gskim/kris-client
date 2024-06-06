const IS_DEV = process.env.APP_VARIANT !== "production";

export default {
  expo: {
    name: IS_DEV ? "kris-dev" : "kris",
    slug: "kris-client",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "cover",
      backgroundColor: "#080000",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "com.kris.dev" : "com.kris",
      // googleSercivesFile: "./GoogleService-Info.plist",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#080000",
      },
      package: IS_DEV ? "com.kris.dev" : "com.kris",
      // googleServicesFile: "./google-services.json",
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
