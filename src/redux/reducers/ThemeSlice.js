import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "@common/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadUserTheme = createAsyncThunk("user/theme", async () => {
  var isDark = await AsyncStorage.getItem("App_Theme");
  return isDark;
});

const initialState = {
  loadingTheme: false,
  isDarkMode: false,
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      AsyncStorage.setItem("App_Theme", JSON.stringify(!state.isDarkMode));
      state.isDarkMode = !state.isDarkMode;
      state.theme = state.isDarkMode ? { ...darkTheme } : { ...lightTheme };
    },
    setTheme: (state, action) => {
      if (action.payload === "dark") {
        state.isDarkMode = true;
        state.theme = { ...darkTheme };
      } else {
        state.isDarkMode = false;
        state.theme = { ...lightTheme };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserTheme.pending, (state) => {
        state.loadingTheme = true;
      })
      .addCase(loadUserTheme.fulfilled, (state, action) => {
        state.loadingTheme = false;
        state.isDarkMode = action.payload ? JSON.parse(action.payload) : false;
        state.theme = state.isDarkMode ? { ...darkTheme } : { ...lightTheme };
      });
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
