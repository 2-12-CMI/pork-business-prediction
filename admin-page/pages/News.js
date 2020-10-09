import mainLayout from "../layout/main";
import Card from "../components/Card";
import Table from "../components/Table";
import "../styles/page.scss";

const Page = () => {
  const header = [
    {
      view: "ID",
      key: "id",
    },
    {
      view: "구분",
      key: "type",
    },
    {
      view: "제목",
      key: "title",
    },
    {
      view: "작성날짜",
      key: "date",
    },
  ];

  return (
    <div className="container">
      <div className="page-name">News</div>
      <div>
        <Card>
          <Table header={header} url="http://localhost:3001/news" />
        </Card>
      </div>
    </div>
  );
};
export default mainLayout(Page);
