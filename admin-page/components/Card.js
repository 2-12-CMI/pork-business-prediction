import "../styles/card.scss";

const Card = ({ title, children }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
