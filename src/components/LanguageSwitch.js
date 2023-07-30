import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "@redux/Store";
import AppText from "./AppText";
import I18n from "i18n-js";
import { toggleLanguage } from "@reducers/LanguageSlice";

const LanguageSwitch = () => {
  const { theme, isDarkMode } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);
  const storeDispatch = useAppDispatch();
  const styles = style(theme);

  const changeLan = () => {
    storeDispatch(toggleLanguage());
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={changeLan}>
      <AppText size={16}>
        <AppText
          size={18}
          color={language === "hi-IN" ? theme.primary : theme.title}
        >
          {I18n.t("screen_messages.Hi")}{" "}
        </AppText>
        /
        <AppText
          size={18}
          color={language === "en-US" ? theme.primary : theme.title}
        >
          {" "}
          {I18n.t("screen_messages.En")}
        </AppText>
      </AppText>
    </TouchableOpacity>
  );
};

const style = (theme) => {
  return StyleSheet.create({});
};

export default LanguageSwitch;
