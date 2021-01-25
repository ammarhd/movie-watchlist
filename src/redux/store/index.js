import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducers from "../reducers";

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
