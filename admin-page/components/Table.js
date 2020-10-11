/* eslint-disable react/no-array-index-key */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from "../common/dateFormat";
import "../styles/table.scss";

const Table = ({ url, header }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(
    router.query.page ? router.query.page : "1",
  );
  const [data, setData] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  let pageNationList = [];

  if (Number(currentPage) <= 5) {
    pageNationList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  } else {
    for (let i = Number(currentPage) - 5; i < Number(currentPage) + 5; i += 1) {
      pageNationList.push(String(i));
      if (i === maxPage) break;
    }
  }

  useEffect(() => {
    if (router.query.page) setCurrentPage(router.query.page);
  }, [router.query.page]);

  useEffect(() => {
    axios.get(url, { params: { page: currentPage } }).then((res) => {
      setData(res.data);
    });
    axios.get(`${url}/maxpage`).then((res) => {
      setMaxPage(res.data.maxpage);
    });
  }, [currentPage]);

  const Header = () => {
    return header.map((col) => <th key={col.key}>{col.view}</th>);
  };

  function rowFormat(col, row) {
    switch (col.key) {
      case "date":
        return dateFormat(row[col.key]);
      case "url":
        return (
          <button
            type="button"
            onClick={() => {
              window.open(row[col.key], "PopupWin", "width=1200,height=800");
            }}
          >
            기사원문
          </button>
        );
      case "topic_modeling":
        return (
          <button
            type="button"
            onClick={() => {
              window.open(
                `http://175.205.223.40:3000/topic/${row.id}`,
                "PopupWin",
                "width=1200,height=800",
              );
            }}
          >
            기사원문
          </button>
        );

      default:
        return row[col.key];
    }
  }

  const Body = () => {
    return data.map((row, index) => (
      <tr key={index}>
        {header.map((col) => (
          <td key={row[col.key]}>{rowFormat(col, row)}</td>
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
