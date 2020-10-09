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
      view: "volume",
      key: "volume",
    },
    {
      view: "judgment_head",
      key: "judgment_head",
    },
    {
      view: "date",
      key: "date",
    },
  ];

  return (
    <div className="container">
      <div className="page-name">Trading Volume</div>
      <div>
        <Card>
          <Table header={header} url="http://localhost:3001/consumption" />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
