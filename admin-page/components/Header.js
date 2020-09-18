import { FiMenu } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import "../styles/header.scss";

const Header = () => (
  <div className="header">
    <div className="logo-box">
      <div className="logo">Pork Prediction</div>
    </div>
    <div className="menu">
      <FiMenu color="white" size="1.2rem" />
    </div>
    <div className="user">
      <BiUserCircle size="1.8rem" />

      <div>CMI 관리자</div>
    </div>
  </div>
);

export default Header;
