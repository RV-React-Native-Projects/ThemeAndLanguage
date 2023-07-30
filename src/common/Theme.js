const Fonts = {
  Font_Bold: "Roboto",
  Font_Regular: "Roboto",
  Font_Medium: "Roboto",
  Font_Light: "Roboto",
};

const Colors = {
  // Main Colors
  primary: "#0283E5",
  primaryLight: "#88C5FE",
  secondary: "#07C060",
  secondaryLight: "#CEFFCD",
  tertiary: "#00AF62",
  tertiaryDark: "#AB7B00",
  tertiaryLight: "#FFF065",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#A7A8AE",
  light: "#e9ecef",
  dark: "#252f40",

  warning: "#f53939",
  info: "#17c1e8",
  success: "#82d616",
  error: "#ea0606",
  marketing: "#303AB6",
  defaultTickedColor: "#CCCCCC",
  unselected: "#979797",

  logout: "#FF3D00",
  green: "#007639",

  // Text Color
  title: "#282828",
  header: "#000000",
  subHeader: "#5A5A5A",
  paragraph: "#666666",

  textColor: "#252F40",
  primaryText: "#CB0C9F",
  secondaryTitle: "#454545",
  secondaryText: "#414141",
  tertiaryText: "#E8AE4C",
  blackText: "#404040",
  whiteText: "#FFFFFF",
  darkText: "#252F40",
  lightText: "#E9ECEF",
  grayText: "#A7A8AE",
  darkGrayText: "#737373",
  linkText: "#CB0C9F",

  primaryButtonText: "#FFFFFF",
  secondaryButtonText: "#FFFFFF",
  tertiaryButtonText: "#FFFFFF",

  // BackGround Color
  primaryBackgroundColor: "#FFFFFF",
  secondaryBackgroundColor: "#FFFFFF",
  whiteBackgroundColor: "#FFFFFF",
  blackBackgroundColor: "#000000",
  modalBackgroundColor: "#FFFFFF",
  appBackgroundColor: "#F2F2F2",
  cardBackgroundColor: "#FFFFFF",

  // Card Color
  cardColor: "#FFFFFF",
  cardBackground: "#E9ECEF",
  cardShadow: "#000000",
  cardOverlay: "#000000A1",
  cardBlack: "#252F40",
  cardLight: "#E9ECEF",
  cardGray: "#D9D9D9",
  cardTitle: "#3D3D3D",

  // SOCIAL color
  facebook: "#3B5998",
  twitter: "#55ACEE",
  dribble: "#EA4C89",
};

const darkColors = {
  // Text Color
  title: "#E9ECEF",
  secondaryTitle: "#E9ECEF",
  secondaryText: "#E9ECEF",
  // BackGround Color
  primaryBackgroundColor: "#171717",
  secondaryBackgroundColor: "#262626",
  modalBackgroundColor: "#171717",
  appBackgroundColor: "#282828",
  cardBackgroundColor: "#262626",
  cardOverlay: "#FFFFFF20",
  // Card Color
  cardColor: "#262626",
  cardBackground: "#171717",
  cardTitle: "#E9ECEF",
};

const gradient = {
  gradientPrimary: ["#FF0080", "#7928CA"],
  gradientSecondary: ["#A8B8D8", "#627594"],
  gradientInfo: ["#21D4FD", "#2152FF"],
  gradientSuccess: ["#98EC2D", "#17AD37"],
  gradientDanger: ["#FF667C", "#EA0606"],
  gradientWarning: ["#FBCF33", "#F53939"],
  gradientLight: ["#EBEFF4", "#CED4DA"],
  gradientDark: ["#3A416F", "#141727"],
};

const inputBox = {
  inputBorderWidth: 1,
  inputBorderColor: "#252F40",
  inputFocusBorderColor: "#E293D3",
};

const sizes = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

const fonts = {
  bold: "Bold",
  semiBold: "SemiBold",
  medium: "Medium",
  regular: "Regular",
  light_text: "Light",
};

const fontSizes = {
  h1FontSize: 24,
  h2FontSize: 20,
  h3FontSize: 18,
  h4FontSize: 16,
  h5FontSize: 14,
  h6FontSize: 12,
};

const constantStyles = {
  cardBorderRadius: 6,
  modalBorderRadius: 4,
  borderWidth: 1,
  normalPadding: 10,
  primaryPadding: 15,
  containerPadding: 20,
};

const textInputStyles = {
  placeHolderColor: "#999999",
  placeHolderTextColor: "#A7A8AE",
  textInputBorderColor: "transparent",
  textInputBorderWidth: 0,
  textInputBorderRadius: 6,
  textInputBgColor: "#E3E3E3",
  textInputSize: 14,
  textInputColor: "#666666",
  textInputLabelColor: "#333333",
};

const darkShadow = {
  light_shadow: {
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mid_shadow: {
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dark_shadow: {
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
};

const lightShadow = {
  light_shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mid_shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dark_shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
};

const theme = {
  ...Fonts,
  ...Colors,
  ...sizes,
  ...fonts,
  ...fontSizes,
  ...constantStyles,
  ...textInputStyles,
  ...lightShadow,
  ...gradient,
  ...inputBox,
};

export const lightTheme = {
  ...Fonts,
  ...Colors,
  ...sizes,
  ...fonts,
  ...fontSizes,
  ...constantStyles,
  ...textInputStyles,
  ...lightShadow,
  ...gradient,
  ...inputBox,
};

export const darkTheme = {
  ...Fonts,
  ...Colors,
  ...darkColors,
  ...sizes,
  ...fonts,
  ...fontSizes,
  ...constantStyles,
  ...textInputStyles,
  ...darkShadow,
  ...gradient,
  ...inputBox,
};

export default theme;
