import {
  FaMoneyBillWave,
  FaNewspaper,
  FaTruckLoading,
  FaPlane,
} from "react-icons/fa";
import mainLayout from "../layout/main";
import SummaryCard from "../components/SummaryCard";
import Card from "../components/Card";
import "../styles/page.scss";

const Page = () => {
  const summaryCards = [
    {
      id: 1,
      title: "PORK WEEKLY PRICE",
      content: "₩ 24,014",
      status: "3.48%",
      statusIncrease: true,
      statusDesc: "Since last week",
      icon: <FaMoneyBillWave size="2.6rem" color="#66bb6a" />,
    },
    {
      id: 2,
      title: "News",
      content: "18",
      status: "6%",
      statusIncrease: false,
      statusDesc: "Since last week",
      icon: <FaNewspaper size="2.6rem" color="#6777ef" />,
    },
    {
      id: 3,
      title: "TRADING VOLUME",
      content: "60,244",
      status: "9%",
      statusIncrease: true,
      statusDesc: "Since yesterday",
      icon: <FaTruckLoading size="2.6rem" color="#3abaf4" />,
    },
    {
      id: 4,
      title: "IMPORT",
      content: "26,330",
      status: "7.5%",
      statusIncrease: true,
      statusDesc: "Since last month",
      icon: <FaPlane size="2.6rem" color="#ffa426" />,
    },
  ];

  return (
    <div className="container">
      <div className="page-name">Dashboard</div>
      <div className="summary">
        {summaryCards.map(
          ({
            id,
            title,
            content,
            status,
            statusIncrease,
            statusDesc,
            icon,
          }) => (
            <div className="item">
              <SummaryCard
                key={id}
                title={title}
                content={content}
                status={status}
                statusIncrease={statusIncrease}
                statusDesc={statusDesc}
              >
                {icon}
              </SummaryCard>
            </div>
          ),
        )}
      </div>
      <Card title="조정제">
        <div>와우와우</div>
      </Card>
    </div>
  );
};

export default mainLayout(Page);
