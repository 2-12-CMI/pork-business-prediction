import mainLayout from "../../layout/main";
import { PriceChart } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">Price</div>

      <div className="card shadow">
        <div className="chart">
          <PriceChart />
        </div>
      </div>
    </div>
  );
};
export default mainLayout(Page);
