import {configureStore, combineReducers, ThunkAction} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import themeReducer from './reducers/ThemeSlice';
import languageReducer from './reducers/LanguageSlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
