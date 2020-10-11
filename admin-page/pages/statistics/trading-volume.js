import mainLayout from "../../layout/main";
import { TradingVolumeChart, DateSelector } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">Trading Volume</div>
      <DateSelector />
      <div className="card shadow">
        <div className="chart">
          <TradingVolumeChart />
        </div>
      </div>
    </div>
  );
};
export default mainLayout(Page);
