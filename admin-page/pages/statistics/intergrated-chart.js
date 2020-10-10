import mainLayout from "../../layout/main";
import { IntergratedChart } from "../../components/Chart";
import "../../styles/page.scss";

const Page = () => {
  return (
    <div className="container">
      <div className="page-name">Intergrated</div>

      <div className="card shadow">
        <div className="chart">
          <IntergratedChart />
        </div>
      </div>
    </div>
  );
};
export default mainLayout(Page);
