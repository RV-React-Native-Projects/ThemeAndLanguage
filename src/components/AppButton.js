import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useAppSelector } from "../redux/Store";
import AppText from "./AppText";

const AppButton = (props) => {
  const { theme, isDarkMode } = useAppSelector((state) => state.theme);
  const {
    onPress,
    title = "Button",
    color = theme.primary,
    height = 50,
    width = "100%",
    borderRadius = 4,
    fontColor = theme.title,
  } = props || {};
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        height: height,
        width: width,
        backgroundColor: color,
        borderRadius: borderRadius,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppText size={16} fontWeight={600} color={fontColor}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(AppButton);

const styles = StyleSheet.create({});
