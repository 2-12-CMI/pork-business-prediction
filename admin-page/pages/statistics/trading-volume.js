import { useEffect, useState } from "react";
import axios from "axios";
import mainLayout from "../../layout/main";
import { LineChart } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/chart/consumption", {
        params: { start: "2020-04-01", end: "2020-05-31" },
      })
      .then((res) => {
        console.log(res.data);
        const volume = res.data.map((item) => ({
          x: item.date,
          y: item.volume,
        }));

        const judgmentHead = res.data.map((item) => ({
          x: item.date,
          y: item.judgment_head,
        }));

        setData([
          {
            id: "volume",
            color: "auto",
            data: volume,
          },
          {
            id: "judgmentHead",
            color: "auto",
            data: judgmentHead,
          },
        ]);
      });
  }, []);

  return (
    <div className="container">
      <div className="page-name">Consumption</div>
      <div className="chart shadow">
        <LineChart data={data} />
      </div>
    </div>
  );
};
export default mainLayout(Page);
