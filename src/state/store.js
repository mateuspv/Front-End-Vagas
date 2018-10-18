import { createStore } from "redux";
import reducer from "./reducer";

const defaultData = {
  isLoading: false,
  jobs: [],
  query: "",
  modal: {
    isVisible: false,
    card: {}
  }
};

let store = createStore(
  reducer,
  defaultData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
