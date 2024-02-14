import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import flexedgeReducer from './flexedgeSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  };

export const persistedReducer = persistReducer(persistConfig,flexedgeReducer)

export const store = configureStore({
  reducer: {flexedge : persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor=persistStore(store);