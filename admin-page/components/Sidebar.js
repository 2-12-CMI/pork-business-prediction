import Link from "next/link";
import "../styles/sidebar.scss";
import { BsNewspaper } from "react-icons/bs";
import {
  FaTruckLoading,
  FaMoneyBillWave,
  FaChartLine,
  FaHighlighter,
} from "react-icons/fa";
import { CgAirplane } from "react-icons/cg";
import { AiOutlineAreaChart, AiOutlineDashboard } from "react-icons/ai";

const Sidebar = () => {
  const data = [
    {
      id: 1,
      name: "",
      links: [
        {
          id: "1-1",
          label: "Dashboard",
          href: "/",
          icon: <AiOutlineDashboard style={{ fontSize: "1.0rem" }} />,
        },
      ],
    },
    {
      id: 2,
      name: "RAW DATA",
      links: [
        {
          id: "2-1",
          label: "News",
          href: "/news",
          icon: <BsNewspaper />,
        },
        {
          id: "2-2",
          label: "Price",
          href: "/price",
          icon: <FaMoneyBillWave />,
        },
        {
          id: "2-3",
          label: "Trading Volume",
          href: "/trading-volume",
          icon: <FaTruckLoading />,
        },
        {
          id: "2-4",
          label: "Import",
          href: "/import",
          icon: <CgAirplane style={{ fontSize: "1.0rem" }} />,
        },
        {
          id: "2-5",
          label: "Export",
          href: "/export",
          icon: <CgAirplane style={{ fontSize: "1.0rem" }} />,
        },
      ],
    },
    {
      id: 3,
      name: "STATISTICS",
      links: [
        {
          id: "3-1",
          label: "Price",
          href: "/statistics/price",
          icon: <AiOutlineAreaChart style={{ fontSize: "1.0rem" }} />,
        },
        {
          id: "3-2",
          label: "Trading Volume",
          href: "/statistics/trading-volume",
          icon: <AiOutlineAreaChart style={{ fontSize: "1.0rem" }} />,
        },
        {
          id: "3-3",
          label: "Intergrated Chart",
          href: "/statistics/intergrated-chart",
          icon: <AiOutlineAreaChart style={{ fontSize: "1.0rem" }} />,
        },
      ],
    },
    {
      id: 4,
      name: "ANALYSIS",
      links: [
        {
          id: "4-1",
          label: "Topic Modeling",
          href: "/analysis/topic-modeling",
          icon: <FaHighlighter />,
        },
        {
          id: "4-2",
          label: "Prediction",
          href: "/analysis/topic-modeling",
          icon: <FaChartLine />,
        },
      ],
    },
  ];

  const Components = data.map((category) => {
    let Category = [];
    if (category.name)
      Category.push(
        <div key={category.id} className="category-name">
          {category.name}
        </div>,
      );
    Category = Category.concat(
      category.links.map((link) => {
        return (
          <>
            <Link key={link.id} href={link.href}>
              <div className="menu">
                {link.icon} {link.label}
              </div>
            </Link>
          </>
        );
      }),
    );
    return Category;
  });

  return <div className="sidebar">{Components}</div>;
};

export default Sidebar;
