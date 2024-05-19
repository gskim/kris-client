// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Foundation from "@expo/vector-icons/MaterialCommunityIcons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  color = "#fff",
  ...rest
}: IconProps<ComponentProps<typeof Foundation>["name"]>) {
  return (
    <Foundation
      size={28}
      color={color}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
