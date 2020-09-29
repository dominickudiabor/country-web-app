import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cart from "./cart";
import country from "./country";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "country"],
};

const createRootReducer = () =>
  combineReducers({
    cart,
    country,
  });
const rootReducer = createRootReducer();

export default persistReducer(persistConfig, rootReducer);
