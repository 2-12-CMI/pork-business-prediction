import "../styles/table.scss";

const Table = () => {
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
    return header.map((col) => <th>{col.view}</th>);
  };

  const Body = () => {
    return datas.map((row) => (
      <tr>
        {header.map((col) => (
          <td>{row[col.key]}</td>
        ))}
      </tr>
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
    </>
  );
};

export default Table;
