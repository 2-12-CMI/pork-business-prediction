import { useEffect, useState } from "react";
import axios from "axios";
import mainLayout from "../../layout/main";
import { LineChart } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/chart/price", {
        params: { start: "2020-01-10", end: "2020-05-31" },
      })
      .then((res) => {
        console.log(res.data);
        const consumerPrice = res.data.map((item) => ({
          x: item.date,
          y: item.consumer_price,
        }));

        const producerPrice = res.data.map((item) => ({
          x: item.date,
          y: item.producer_price,
        }));

        const wholesaleBestPrice = res.data.map((item) => ({
          x: item.date,
          y: item.wholesale_best_price,
        }));

        console.log(consumerPrice);

        setData([
          {
            id: "consumer_price",
            color: "auto",
            data: consumerPrice,
          },
          {
            id: "producer_price",
            color: "auto",
            data: producerPrice,
          },
          {
            id: "wholesale_best_price",
            color: "auto",
            data: wholesaleBestPrice,
          },
        ]);
      });
  }, []);

  return (
    <div className="container">
      <div className="page-name">Price</div>
      <div className="chart shadow">
        <LineChart data={data} />
      </div>
    </div>
  );
};
export default mainLayout(Page);
