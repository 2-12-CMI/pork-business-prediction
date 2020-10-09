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
      view: "count",
      key: "count",
    },
  ];

  return (
    <div className="container">
      <div className="page-name">Import</div>
      <div>
        <Card>
          <Table header={header} url="http://localhost:3001/import" />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
