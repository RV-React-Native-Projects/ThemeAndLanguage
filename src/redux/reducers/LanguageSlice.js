import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadAppLan = createAsyncThunk("user/theme", async () => {
  var lan = await AsyncStorage.getItem("App_Lan");
  return lan;
});

const initialState = {
  loadingLanguage: false,
  language: "en-US",
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      if (action.payload) state.language = action.payload;
      // ===> You can save the Same STATE in the Async Storage
      // AsyncStorage.setItem("App_Lan", JSON.stringify(action?.payload));
    },
    toggleLanguage: (state, action) => {
      console.log("===>", state?.language, action);
      if (state.language == "en-US") state.language = "hi-IN";
      else state.language = "en-US";
      // ===> You can save the Same STATE in the Async Storage
      // AsyncStorage.setItem("App_Lan", JSON.stringify(action?.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAppLan.pending, (state) => {
        state.loadingLanguage = true;
      })
      .addCase(loadAppLan.fulfilled, (state, action) => {
        state.loadingLanguage = false;
        state.language = action.payload ? JSON.parse(action.payload) : "en-US";
      });
  },
});

export const { changeLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
