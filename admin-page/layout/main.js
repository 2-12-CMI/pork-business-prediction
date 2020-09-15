import Header from "../components/Header";
import "../styles/reset.scss";
import "../styles/global.scss";

const mainLayout = (Page) => {
  return () => (
    <div>
      <Header />
      <Page />
    </div>
  );
};

export default mainLayout;
