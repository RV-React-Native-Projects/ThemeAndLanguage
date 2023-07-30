import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import I18n from "i18n-js";
import AppButton from "@components/AppButton";
import { useAppSelector } from "@redux/Store";
import AppTextInput from "@components/AppTextInput";
import ThemeSwitch from "@components/ThemeSwitch";
import LanguageSwitch from "@components/LanguageSwitch";

const SignUp = (props) => {
  const { theme } = useAppSelector((state) => state.theme);
  const { language } = useAppSelector((state) => state.language);
  const styles = style(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const gotoLoginPage = () => {
    props.navigation.goBack();
  };

  const navigateToHome = () => {
    props.navigation.navigate("Home_Page");
  };

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
        <View style={{ flex: 0.9, marginTop: 50 }}>
          <AppText size={26} style={styles.loginText}>
            {I18n.t("screen_messages.signup")}
          </AppText>
          {/* ======== Toggle theme ============ */}
          <View style={{ justifyContent: "center" }}>
            <AppTextInput
              // label={I18n.t("screen_messages.Email")}
              placeholder={I18n.t("screen_messages.Email")}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
              containerStyle={{ marginBottom: 15 }}
            />
            <AppTextInput
              // label={I18n.t("screen_messages.Email")}
              placeholder={I18n.t("screen_messages.name")}
              value={username}
              onChangeText={(txt) => setUsername(txt)}
              containerStyle={{ marginBottom: 15 }}
            />
            <AppTextInput
              // label={I18n.t("screen_messages.Email")}
              placeholder={I18n.t("screen_messages.mobile")}
              value={phone}
              onChangeText={(txt) => setPhone(txt)}
              containerStyle={{ marginBottom: 15 }}
            />
            <AppTextInput
              // label={I18n.t("screen_messages.Password")}
              placeholder={I18n.t("screen_messages.Password")}
              value={password}
              onChangeText={(txt) => setPassword(txt)}
              secureTextEntry
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <AppText size={16} color={theme.gray}>
              {I18n.t("screen_messages.already_have_acc")}
            </AppText>
            <TouchableOpacity onPress={gotoLoginPage}>
              <AppText size={16} color={theme.primary}>
                {"   "}
                {I18n.t("screen_messages.login")}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
        <AppButton
          title={I18n.t("button.signup")}
          fontColor={theme.white}
          onPress={navigateToHome}
        />
      </View>
    </AppContainer>
  );
};

export default memo(SignUp);

const style = (theme) => {
  return StyleSheet.create({
    loginText: {
      marginVertical: 30,
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
