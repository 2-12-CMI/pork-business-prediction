/* eslint-disable react/no-array-index-key */
import "../styles/table.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from "../common/dateForamt";

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
    axios.get(url, { params: { page: currentPage } }).then((res) => {
      setData(res.data);
    });
    axios.get(`${url}/maxpage`).then((res) => {
      setMaxPage(res.data.maxpage);
    });
  }, [router.query.page]);

  const Header = () => {
    return header.map((col) => <th key={col.key}>{col.view}</th>);
  };

  const Body = () => {
    return data.map((row, index) => (
      <tr key={index}>
        {header.map((col) => (
          <td key={row[col.key]}>
            {col.key === "date" ? dateFormat(row[col.key]) : row[col.key]}
          </td>
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
