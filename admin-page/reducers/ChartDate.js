const lastMonth = new Date();
const today = new Date();

lastMonth.setMonth(today.getMonth());

export const initialState = {
  start: "2019-04-01",
  end: "2019-05-01",
};

export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        start: action.start,
      };
    case SET_END_DATE:
      return {
        ...state,
        end: action.end,
      };
    default:
      return state;
  }
};

export default reducer;
