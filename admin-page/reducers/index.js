import { combineReducers } from "redux"; // 여러 리듀서들을 하나로 합쳐준다.
import ChartDate from "./ChartDate";

const rootReducer = combineReducers({
  ChartDate,
});

export default rootReducer; // _app.js에서 reducer로 사용된다!
