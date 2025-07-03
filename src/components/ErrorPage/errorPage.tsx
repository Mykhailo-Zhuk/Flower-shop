import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "../../styles/errorPage.css";
import Footer from "../Footer/Footer";
const errorPage = () => {
  return (
    <div>
      <HeaderMenu />
      <div className="error-pageContainer">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <Footer />
    </div>
  );
};

export default errorPage;
