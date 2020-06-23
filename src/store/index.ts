import { combineReducers, createStore } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { domainReducer } from "./domain/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["someList"],
};

const rootReducer = combineReducers({
  domainList: domainReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type ApptState = ReturnType<typeof rootReducer>;
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
