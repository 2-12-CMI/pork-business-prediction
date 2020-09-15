import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/reset.scss";
import "../styles/global.scss";

const mainLayout = (Page) => {
  return () => (
    <div>
      <Header />
      <div className="contents">
        <Sidebar />
        <Page />
      </div>
      <style jsx>
        {`
          .contents {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default mainLayout;
