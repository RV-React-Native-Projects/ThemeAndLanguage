import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import I18n from "i18n-js";
import { useAppSelector } from "@redux/Store";
import ThemeSwitch from "@components/ThemeSwitch";
import LanguageSwitch from "@components/LanguageSwitch";

const Home = (props) => {
  const { theme } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);
  const styles = style(theme);

  return (
    <AppContainer scrollable={false}>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LanguageSwitch />
          <ThemeSwitch />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <AppText size={26}>{I18n.t("screen_messages.welcome_home")}</AppText>
        </View>
      </View>
    </AppContainer>
  );
};

export default memo(Home);

const style = (theme) => {
  return StyleSheet.create({});
};
