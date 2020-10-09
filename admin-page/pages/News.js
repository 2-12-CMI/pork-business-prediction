import mainLayout from "../layout/main";
import Card from "../components/Card";
import Table from "../components/Table";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">News</div>
      <div>
        <Card>
          <Table />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
