import React, { createContext, useEffect } from "react";
import Message from "../common/message.json";
import I18n from "i18n-js";
import { useAppSelector } from "../redux/Store";

const MessagesContext = createContext();

export function MessagesContextProvider(props) {
  const { language } = useAppSelector((state) => state.language);

  I18n.translations = Message;
  I18n.fallbacks = true;
  I18n.defaultLocale = language;
  I18n.Locales = { languageTag: language };
  I18n.locale = language;

  // =====> Not required after the REDUX
  // useEffect(() => {
  //   I18n.locale = language;
  // }, [language]);

  return (
    <MessagesContext.Provider value={{ language }}>
      {props.children}
    </MessagesContext.Provider>
  );
}

export default MessagesContext;
