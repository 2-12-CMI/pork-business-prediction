import "../styles/table.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Table = () => {
  const router = useRouter();

  const pageNationList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const [currentPage, setCurrentPage] = useState(
    router.query.page ? router.query.page : "1",
  );

  useEffect(() => {
    if (router.query.page) setCurrentPage(router.query.page);
  }, [router.query.page]);

  const header = [
    {
      view: "ID",
      key: "id",
    },
    {
      view: "구분",
      key: "type",
    },
    {
      view: "제목",
      key: "title",
    },
    {
      view: "작성날짜",
      key: "date",
    },
  ];

  const datas = [
    {
      id: 1,
      type: "pigtimes",
      title: "ASF재입식 절차 9월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 2,
      type: "pigtimes2",
      title: "ASF재입식 절차 1월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 3,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 4,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 5,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 6,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 7,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 8,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 9,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
    {
      id: 10,
      type: "pigtimes3",
      title: "ASF재입식 절차 2월부터 진행키로",
      date: "2020-08-30",
    },
  ];

  const Header = () => {
    return header.map((col) => <th key={col.key}>{col.view}</th>);
  };

  const Body = () => {
    return datas.map((row) => (
      <tr key={row.id}>
        {header.map((col) => (
          <td key={row[col.key]}>{row[col.key]}</td>
        ))}
      </tr>
    ));
  };

  const PageNation = () => {
    return pageNationList.map((page) => (
      <Link href={{ pathname: router.pathname, query: { page } }} key={page}>
        <div className={currentPage === page ? "current shadow" : "shadow"}>
          {page}
        </div>
      </Link>
    ));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <Header />
          </tr>
        </thead>
        <tbody>
          <Body />
        </tbody>
      </table>
      <div className="pagination-wrap">
        <div className="pagination">
          <PageNation />
        </div>
      </div>
    </>
  );
};

export default Table;
