import React from "react";
import { Text } from "react-native";
import { useAppSelector } from "@redux/Store";

export default function AppText(props) {
  const { theme } = useAppSelector((state) => state.theme);
  const fs = Array.isArray(props?.style) ? props?.style : [props?.style];

  const {
    size = 14, // size of the Text
    fontWeight = 600, // fontWeight of the Text
    color = theme.title, // color for the Text
    children, // to have the childrens
    fontFamily = theme.Font_Regular, // font Family for the Text
    onPress,
  } = props || {};

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: size,
          fontWeight: fontWeight,
          color: color,
          fontFamily: fontFamily,
          includeFontPadding: false,
        },
        ...fs,
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}
