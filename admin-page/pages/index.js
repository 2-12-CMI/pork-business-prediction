import mainLayout from "../layout/main";
import "../styles/page.scss";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">Dashboard</div>
    </div>
  );
};

export default mainLayout(Page);
