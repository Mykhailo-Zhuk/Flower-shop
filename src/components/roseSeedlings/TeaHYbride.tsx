import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "../../styles/Carusel.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import {
  FirstTeaHybrideRoseCarusel,
  SecondTeaHybrideRoseCarusel,
  ThirdyTeaHybrideRoseCarusel,
  FourthTeaHybrideRoseCarusel,
  FifthTeaHybrideRoseCarusel,
  SixthTeaHybrideRoseCarusel,
  SeventhTeaHybrideRoseCarusel,
  EihgthTeaHybrideRoseCarusel,
  NinethTeaHybrideRoseCarusel,
  TenthTeaHybrideRoseCarusel,
  EleventhTeaHybrideRoseCarusel,
  TwelveTeaHybrideRoseCarusel,
  ThirteenTeaHybrideRoseCarusel,
  FourteenTeaHybrideRoseCarusel,
  FifteenTeaHybrideRoseCarusel,
} from "../../Data/mainMenuData";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const TeaHYbride = () => {
  return (
    <>
      <HeaderMenu />
      <BreadCrumb />
      <section className="SectionCaruselBackground">
        <UniversalCarusel
          items={FirstTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SecondTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirdyTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FourthTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FifthTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SixthTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SeventhTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={EihgthTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={NinethTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={TenthTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={EleventhTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={TwelveTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirteenTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FourteenTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FifteenTeaHybrideRoseCarusel}
          type="teahybride"
          slidesToShow={2}
        />
        <Link to="catalog-of-roses/catalog-tea-hybride-sun-rose">
          Перейти до Sun Rose
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default TeaHYbride;
