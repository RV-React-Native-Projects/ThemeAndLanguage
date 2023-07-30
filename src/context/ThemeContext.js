import React, { createContext, useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigatiorLightTheme,
  DarkTheme as NavigatiorDarkTheme,
} from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
} from "react-native-paper";
import { MessagesContextProvider } from "./MessageContext";
import { useAppSelector } from "@redux/Store";
import { useColorScheme } from "react-native";
import { setTheme } from "../redux/reducers/ThemeSlice";
import { useAppDispatch } from "../redux/Store";

const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const { theme, isDarkMode } = useAppSelector((state) => state.theme);
  const storeDispath = useAppDispatch();
  const colorScheme = useColorScheme();
  useEffect(() => {
    // console.log("Theme changed:", colorScheme);
    storeDispath(setTheme(colorScheme));
  }, [colorScheme]);

  const paperTheme = isDarkMode ? PaperDarkTheme : PaperLightTheme;
  const navigationTheme = isDarkMode
    ? NavigatiorDarkTheme
    : NavigatiorLightTheme;
  const config = {
    useSystemColorMode: true,
    initialColorMode: isDarkMode ? "dark" : "light",
  };
  const nativeBaseTheme = extendTheme({ config });

  return (
    <ThemeContext.Provider value={{}}>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <NavigationContainer theme={navigationTheme}>
          <PaperProvider theme={paperTheme}>
            <MessagesContextProvider>{props.children}</MessagesContextProvider>
          </PaperProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
