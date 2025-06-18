import "../styles/mainPage.css";
import IndexCarusel from "./Carusel/IndexCarusel";
import MenuDataMainPage, { CatalogDataMainPage } from "../Data/mainMenuData";

type MenuItem = {
  name: string;
  link: string;
  img: string;
};

type CatalogItem = {
  titleOfCatalog: string;
  backgroundImages: string;
};

const MainPage: React.FC = () => {
  const menuItems: MenuItem[] = MenuDataMainPage;
  const catalogItems: CatalogItem[] = CatalogDataMainPage;
  return (
    <div>
      <section className="Section1">
        <div className="logo">
          <img
            src="/public/ГоловнаСторінка/2.png"
            alt="logo Alyona's Garden"
            className="logoImage"
          />
        </div>
      </section>
      <section className="Section2">
        <ul className="MenuULSelect">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="LiMenuSelect" href={item.link}>
                <img
                  src={item.img.replace("../../public", "")}
                  alt={item.name}
                />
                <span className="menu-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="Section3">
        <video
          height={"60%"}
          width={"100%"}
          src="/public/ГоловнаСторінка/flowerBlooming.mp4"
          loop
          autoPlay
          muted
        ></video>
      </section>
      <section className="Section4">
        <div className="titleOfCatalog">
          <h2 className="headerOfCatolog">Каталог</h2>
        </div>

        <div className="DisplayCenter">
          <div className="ColumnOfCatalog">
            {catalogItems.map((item, idx) => (
              <div
                key={idx}
                className="catalog-item"
                style={{
                  backgroundImage: `url(${item.backgroundImages})`,
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div className="headerContainer">
                  <h3 className="headerCatalogu">{item.titleOfCatalog}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Section5">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">ТОП продажів</h2>
        </div>
        <IndexCarusel />
      </section>
      <section className="Section5">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">Популярні товари</h2>
        </div>
        <IndexCarusel />
      </section>
    </div>
  );
};

export default MainPage;
