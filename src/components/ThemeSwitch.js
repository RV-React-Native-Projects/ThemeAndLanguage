import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useAppSelector, useAppDispatch } from "@redux/Store";
import svgs from "@common/Svgs";
import { toggleTheme } from "@reducers/ThemeSlice";

const ThemeSwitch = (props) => {
  const storeDispatch = useAppDispatch();
  const { theme, isDarkMode } = useAppSelector((state) => state.theme);
  const { sunColor = theme.white, moonColor = theme.black } = props || {};

  const handlePress = () => {
    storeDispatch(toggleTheme());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
        {isDarkMode ? (
          <svgs.Sun stroke={sunColor} />
        ) : (
          <svgs.Moon stroke={moonColor} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(ThemeSwitch);
