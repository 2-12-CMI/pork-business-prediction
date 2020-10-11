import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";
import dateFormat from "../../common/dateFormat";
import moneyFormat from "../../common/moneyFormat";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Price = () => {
  const [data, setData] = useState([]);
  const chartDate = useSelector((state) => {
    return state.ChartDate;
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/chart", {
        params: {
          start: dateFormat(chartDate.start, "-"),
          end: dateFormat(chartDate.end, "-"),
        },
      })
      .then((res) => {
        const consumerPrice = res.data.price.map((item) => ({
          x: item.date,
          y: item.consumer_price,
        }));

        const producerPrice = res.data.price.map((item) => ({
          x: item.date,
          y: item.producer_price,
        }));

        const wholesaleBestPrice = res.data.price.map((item) => ({
          x: item.date,
          y: item.wholesale_best_price,
        }));

        setData([
          {
            id: "소비자가격",
            color: "auto",
            data: consumerPrice,
          },
          {
            id: "산지가격",
            color: "auto",
            data: producerPrice,
          },
          {
            id: "도매가격",
            color: "auto",
            data: wholesaleBestPrice,
          },
        ]);
      });
  }, [chartDate]);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 80 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
        precision: "day",
      }}
      xFormat="time:%d"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: "%b %d",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -17,
        legend: "Price",
        legendOffset: -60,
        legendPosition: "middle",
        format: (value) => moneyFormat(value),
      }}
      colors={{ scheme: "category10" }}
      lineWidth={3}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh
      curve="catmullRom"
      enableGridX={false}
      //   enableGridY={false}
      enableArea
      enablePoints={false}
      areaBaselineValue="auto"
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
            }}
          >
            {/* <div>x: {slice.id}</div> */}
            {slice.points.map((point) => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: "3px 0",
                }}
              >
                {/* <strong>{point.serieId}</strong> {point.data.yFormatted} */}
                {moneyFormat(point.data.yFormatted)}
              </div>
            ))}
          </div>
        );
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 8,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Price;
