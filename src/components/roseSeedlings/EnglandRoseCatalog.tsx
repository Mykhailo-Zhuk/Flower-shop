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


const EnglandRoseCatalog = () => {
  return (
    <>
      <HeaderMenu />
      <BreadCrumb />
      <section className="SectionCaruselBackground">
        <UniversalCarusel
          items={FirstEnglandRoseCarusel} // EnglandRoseCarusel[]
          type="england"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SecondEnglandRoseCarusel}
          type="england"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirdyEnglandRoseCarusel}
          type="england"
          slidesToShow={2}
        />
      </section>
      <Footer />
    </>
  );
};

export default EnglandRoseCatalog;
