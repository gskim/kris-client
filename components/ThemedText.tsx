import { Text, type TextProps, StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
import React from "react";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  fontSize?: number;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "light";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = Colors.dark.text;

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "light" ? styles.light : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: "nanum400",
  },
  defaultSemiBold: {
    fontSize: 16,
    fontFamily: "nanum500",
  },
  title: {
    fontSize: 34,
    fontFamily: "nanum700",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "nanum500",
  },
  link: {
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "nanum400",
  },
  light: {
    fontFamily: "nanum300",
  },
});
