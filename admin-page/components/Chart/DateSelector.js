import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/chart.scss";

const ChartDateSelector = () => {
  const dispatch = useDispatch();
  const chartDate = useSelector((state) => {
    return state.ChartDate;
  });

  const onStartDateChange = useCallback((e) => {
    dispatch({ type: "SET_START_DATE", start: e.target.value });
  }, []);

  const onEndDateChange = useCallback((e) => {
    dispatch({ type: "SET_END_DATE", end: e.target.value });
  }, []);

  return (
    <div className="date-selector shadow">
      <input
        className="start"
        type="date"
        value={chartDate.start}
        onChange={onStartDateChange}
        size="40"
      />
      <div className="wave" />
      <input
        className="end"
        type="date"
        value={chartDate.end}
        onChange={onEndDateChange}
      />
    </div>
  );
};
export default ChartDateSelector;
