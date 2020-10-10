import { PriceChart, NewsChart } from ".";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const IntergratedChart = () => {
  return (
    <>
      <div className=" graphContainer">
        <PriceChart />
      </div>
      <div className=" secondGraph">
        <NewsChart />
      </div>
    </>
  );
};

export default IntergratedChart;
