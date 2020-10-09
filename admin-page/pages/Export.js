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
      view: "quarantine",
      key: "quarantine",
    },
    {
      view: "customs_clearance",
      key: "customs_clearance",
    },
  ];

  return (
    <div className="container">
      <div className="page-name">Export</div>
      <div>
        <Card>
          <Table header={header} url="http://localhost:3001/export" />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
