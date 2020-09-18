import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "../styles/summary-card.scss";

const Status = ({ increase, status, desc }) => {
  if (increase) {
    return (
      <>
        <div className="increase">
          <FaArrowUp />
          <div className="status">{status}</div>
        </div>
        <div className="status-desc">{desc}</div>
      </>
    );
  }
  return (
    <>
      <div className="decrease">
        <FaArrowDown />
        <div className="status">{status}</div>
      </div>
      <div className="status-desc">{desc}</div>
    </>
  );
};

const SummaryCard = ({
  title,
  content,
  status,
  statusIncrease,
  statusDesc,
  children,
}) => {
  return (
    <div className="summary-card">
      <div className="info">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="bottom">
          <Status increase={statusIncrease} status={status} desc={statusDesc} />
        </div>
      </div>
      <div className="icon">{children}</div>
    </div>
  );
};

export default SummaryCard;
