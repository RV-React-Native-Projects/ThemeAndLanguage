import React, { memo } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import AppText from "@components/AppText";
import { useAppSelector } from "@redux/Store";

function AppTextInput(props) {
  const { theme } = useAppSelector((state) => state.theme);
  const {
    label, // lable for the Text Input
    labelSize = 14, // fize of the lable
    disabled, // diable : boolean
    placeholder = "Placeholder", // placeholder :"string"
    onChangeText, // onChnange function()
    selectionColor = theme.primary, // focus Color of the Input Value
    value, // value of the Input Area
    activeOutlineColor = theme.primary, // Border color on focus of the inputArea
    multiline, // multiline : boolean
    onFocus, // function void()
    onBlur, // function void()
    editable = true, // editable : boolean
    height = 50, // height of the text input
    backgroundColor = theme.modalBackgroundColor, // background color of the text Input
    styles, // custome style={{}}
    autoFocus = false, // autoFocus : boolean
    secureTextEntry = false, // secureTextEntry: boolean
    focused = false, // focused: boolean
    borderRadius = 4, // costome  borderRadius as Number
    containerStyle, // styles for container containerStyle={{}}
  } = props || {};

  return (
    <View>
      {label ? (
        <AppText
          size={labelSize}
          fontStyle="600.semibold"
          color={theme.subHeader}
          style={{ marginVertical: 10 }}
        >
          {label}
        </AppText>
      ) : null}
      <View
        style={{
          borderWidth: theme.borderWidth,
          borderColor: disabled
            ? theme.gray
            : focused
            ? theme.primary
            : theme.gray,
          borderRadius: borderRadius,
          height: height,
          backgroundColor: backgroundColor,
          width: "100%",
          overflow: "hidden",
          ...containerStyle,
        }}
      >
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          disabled={disabled}
          placeholder={placeholder}
          selectionColor={selectionColor}
          activeOutlineColor={activeOutlineColor}
          multiline={multiline}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={editable}
          keyboardType="default"
          autoFocus={autoFocus}
          secureTextEntry={secureTextEntry}
          style={{
            height: "100%",
            width: "100%",
            padding: 10,
            fontSize: 16,
            color: theme.primary,
            ...styles,
          }}
          placeholderTextColor={theme.gray}
          {...props}
        />
      </View>
    </View>
  );
}

export default memo(AppTextInput);

const styles = StyleSheet.create({});
