import { configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {contactSlice} from './slice';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  };

  const persistedContactsReducer = persistReducer(persistConfig, contactSlice.reducer)


export const store = configureStore({
  reducer: persistedContactsReducer, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



