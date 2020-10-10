import mainLayout from "../../layout/main";
import { TradingVolumeChart } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">Trading Volume</div>

      <div className="card shadow">
        <div className="chart">
          <TradingVolumeChart />
        </div>
      </div>
    </div>
  );
};
export default mainLayout(Page);
