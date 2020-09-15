import Link from "next/link";
import "../styles/sidebar.scss";

const Sidebar = () => (
  <div className="sidebar">
    <Link href="/">
      <div className="menu">Dashboard</div>
    </Link>
    <Link href="/News" className="menu">
      <div className="menu">News</div>
    </Link>
    <Link href="/Price" className="menu">
      <div className="menu">Price</div>
    </Link>
    <Link href="/TradingVolume" className="menu">
      <div className="menu">Trading Volume</div>
    </Link>
  </div>
);

export default Sidebar;
