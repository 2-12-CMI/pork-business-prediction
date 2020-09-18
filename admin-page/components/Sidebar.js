import Link from "next/link";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const data = [
    {
      name: "",
      links: [
        {
          label: "Dashboard",
          href: "/",
        },
      ],
    },
    {
      name: "RAW DATA",
      links: [
        {
          label: "News",
          href: "/news",
        },
        {
          label: "Price",
          href: "/price",
        },
        {
          label: "Trading Volume",
          href: "/trading-volume",
        },
        {
          label: "Import",
          href: "/import",
        },
        {
          label: "Export",
          href: "/export",
        },
      ],
    },
    {
      name: "STATISTICS",
      links: [
        {
          label: "Price",
          href: "/statistics/price",
        },
        {
          label: "Trading Volume",
          href: "/statistics/trading-volume",
        },
        {
          label: "Intergrated Chart",
          href: "/statistics/intergrated-chart",
        },
      ],
    },
    {
      name: "ANALYSIS",
      links: [
        {
          label: "Topic Modeling",
          href: "/analysis/topic-modeling",
        },
        {
          label: "Prediction",
          href: "/analysis/topic-modeling",
        },
      ],
    },
  ];

  const Components = data.map((category) => {
    let Category = [];
    if (category.name)
      Category.push(<div className="category-name">{category.name}</div>);
    Category = Category.concat(
      category.links.map((link) => {
        return (
          <Link href={link.href}>
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
