import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import AppButton from "@components/AppButton";
import I18n from "i18n-js";
import { useAppDispatch, useAppSelector } from "@redux/Store";
import { setTheme } from "@reducers/ThemeSlice";
import { toggleLanguage } from "@reducers/LanguageSlice";

const Landing = (props) => {
  const { theme, isDarkMode } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);
  const storeDispatch = useAppDispatch();
  const styles = style(theme);

  const changeTheme = (color) => {
    storeDispatch(setTheme(color));
  };

  const changeLan = () => {
    storeDispatch(toggleLanguage());
  };

  function navigateToLogin() {
    props.navigation.navigate("Login_Page");
  }

  return (
    <AppContainer scrollable={false}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 0.9, justifyContent: "center" }}>
          <AppText size={26} style={styles.welcomeText}>
            {I18n.t("screen_messages.welcome")}
          </AppText>
          {/* ======== Toggle theme ============ */}
          <>
            <AppText size={20} style={styles.title}>
              {I18n.t("screen_messages.change_theme")}
            </AppText>
            <View style={styles.buttonContainer}>
              <AppButton
                title={I18n.t("screen_messages.light_theme")}
                color={!isDarkMode ? theme.secondary : "transparent"}
                fontColor={!isDarkMode ? theme.white : theme.title}
                width="50%"
                borderRadius={0}
                onPress={() => changeTheme("light")}
              />

              <AppButton
                title={I18n.t("screen_messages.dark_theme")}
                color={isDarkMode ? theme.secondary : "transparent"}
                fontColor={isDarkMode ? theme.white : theme.title}
                width="50%"
                borderRadius={0}
                onPress={() => changeTheme("dark")}
              />
            </View>
          </>
          {/* ======== Toggle Language ============ */}
          <>
            <AppText size={20} style={styles.title}>
              {I18n.t("screen_messages.change_language")}
            </AppText>
            <View style={styles.buttonContainer}>
              <AppButton
                title={I18n.t("screen_messages.english")}
                color={language === "en-US" ? theme.secondary : "transparent"}
                fontColor={language === "en-US" ? theme.white : theme.title}
                width="50%"
                borderRadius={0}
                onPress={changeLan}
              />
              <AppButton
                title={I18n.t("screen_messages.hindi")}
                color={language === "hi-IN" ? theme.secondary : "transparent"}
                fontColor={language === "hi-IN" ? theme.white : theme.title}
                width="50%"
                borderRadius={0}
                onPress={changeLan}
              />
            </View>
          </>
        </View>
        <AppButton
          title={I18n.t("button.continue")}
          fontColor={theme.white}
          onPress={navigateToLogin}
        />
      </View>
    </AppContainer>
  );
};

export default memo(Landing);

const style = (theme) => {
  return StyleSheet.create({
    welcomeText: {
      marginVertical: 50,
      textAlign: "center",
    },
    title: { marginVertical: 10, marginBottom: 10 },
    buttonContainer: {
      flexDirection: "row",
      borderColor: theme.title,
      borderWidth: 1,
      borderRadius: 4,
      overflow: "hidden",
      marginBottom: 50,
    },
  });
};
