import { combineReducers, createStore } from "redux";
const rootReducer = combineReducers({
  //Noi CHỨA toàn bộ state của ứng dụng (thay vi đat duoi this.state)
  // stateGioHang: (state = []) => {},
});

export const store = createStore(rootReducer);
