import mainLayout from "../layout/main";
import Card from "../components/Card";
import Table from "../components/Table";
import "../styles/page.scss";

const Page = () => {
  const header = [
    {
      view: "년",
      key: "year",
    },
    {
      view: "월",
      key: "month",
    },
    {
      view: "일",
      key: "day",
    },
    {
      view: "producer_price",
      key: "producer_price",
    },
    {
      view: "wholesale_avg_price",
      key: "wholesale_avg_price",
    },
    {
      view: "wholesale_best_price",
      key: "wholesale_best_price",
    },
    {
      view: "consumer_price",
      key: "consumer_price",
    },
  ];

  return (
    <div className="container">
      <div className="page-name">Price</div>
      <div>
        <Card>
          <Table header={header} url="http://localhost:3001/price" />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
