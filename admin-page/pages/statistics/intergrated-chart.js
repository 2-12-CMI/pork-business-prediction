import { useEffect, useState } from "react";
import axios from "axios";
import mainLayout from "../../layout/main";
import { LineChart, SecondLineChart } from "../../components/Chart";
import "../../styles/page.scss";
import dateForamt from "../../common/dateForamt";

const Page = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/chart", {
        params: { start: "2020-01-01", end: "2020-05-31" },
      })
      .then((res) => {
        console.log(res.data);
        const news = res.data.news.map((item) => ({
          x: dateForamt(item.date, "-"),
          y: item.cnt,
        }));

        const price = res.data.price.map((item) => ({
          x: dateForamt(item.date, "-"),
          y: item.consumer_price,
        }));
        const consumption = res.data.consumption.map((item) => ({
          x: dateForamt(item.date, "-"),
          y: item.volume,
        }));

        setData([
          {
            id: "news",
            color: "auto",
            data: news,
          },
        ]);

        setData2([
          {
            id: "news",
            color: "auto",
            data: price,
          },
        ]);
      });
  }, []);

  return (
    <div className="container">
      <div className="page-name">Consumption</div>
      <div className="chart shadow">
        <div className="graphContainer">
          <LineChart data={data} />
        </div>
        <div className="secondGraph">
          <SecondLineChart data={data2} />
        </div>
      </div>
    </div>
  );
};
export default mainLayout(Page);
