import Link from "next/link";
import "../styles/sidebar.scss";

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
        },
        {
          id: "2-2",
          label: "Price",
          href: "/price",
        },
        {
          id: "2-3",
          label: "Trading Volume",
          href: "/trading-volume",
        },
        {
          id: "2-4",
          label: "Import",
          href: "/import",
        },
        {
          id: "2-5",
          label: "Export",
          href: "/export",
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
        },
        {
          id: "3-2",
          label: "Trading Volume",
          href: "/statistics/trading-volume",
        },
        {
          id: "3-3",
          label: "Intergrated Chart",
          href: "/statistics/intergrated-chart",
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
        },
        {
          id: "4-2",
          label: "Prediction",
          href: "/analysis/topic-modeling",
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
          <Link key={link.id} href={link.href}>
            <div className="menu">{link.label}</div>
          </Link>
        );
      }),
    );
    return Category;
  });

  return <div className="sidebar">{Components}</div>;
};

export default Sidebar;
