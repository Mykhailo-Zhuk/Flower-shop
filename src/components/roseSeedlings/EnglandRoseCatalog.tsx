import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "../../styles/Carusel.css";
import Footer from "../Footer/Footer";
import {
  FirstEnglandRoseCarusel,
  SecondEnglandRoseCarusel,
  ThirdyEnglandRoseCarusel,
} from "../../Data/mainMenuData";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SortByInput from "../SortBy/SortByInput";

const EnglandRoseCatalog = () => {
  return (
    <div className="CatalogOfRoses">
      <HeaderMenu />
      <BreadCrumb />
      <h1 className="TitleOfSection1">Англійські ТРОЯНДи</h1>
      <SortByInput />
      <section className="SectionCaruselBackground">
        <UniversalCarusel
          items={FirstEnglandRoseCarusel} // EnglandRoseCarusel[]
          type="england"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SecondEnglandRoseCarusel}
          type="england"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirdyEnglandRoseCarusel}
          type="england"
          slidesToShow={1}
        />
      </section>
      <Footer />
    </div>
  );
};

export default EnglandRoseCatalog;
