import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "../../styles/Carusel.css";
import Footer from "../Footer/Footer";
import {
  FirstBordersRoseCarusel,
  SecondBordersRoseCarusel,
  ThirdyBordersRoseCarusel,
  FourthBordersRoseCarusel,
  FifthBordersRoseCarusel,
  SixthBordersRoseCarusel,
  SeventhBordersRoseCarusel,
  EihgthBordersRoseCarusel,
  NinethBordersRoseCarusel,
  TenthBordersRoseCarusel,
  EleventhBordersRoseCarusel,
  TwelveBordersRoseCarusel,
  ThirteenBordersRoseCarusel,
  FourteenBordersRoseCarusel,
  FifthteenBordersRoseCarusel,
  SixteenBordersRoseCarusel,
} from "../../Data/mainMenuData";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SortByInput from "../SortBy/SortByInput";

const BordersRose = () => {
  return (
    <div className="CatalogOfRoses">
      <HeaderMenu />
      <BreadCrumb />
      <h1 className="TitleOfSection1">Бордюрні ТРОЯНДи</h1>
      <SortByInput />
      <section className="SectionCaruselBackground">
        <UniversalCarusel
          items={FirstBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SecondBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirdyBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FourthBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FifthBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SixthBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SeventhBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={EihgthBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={NinethBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={TenthBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={EleventhBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={TwelveBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={ThirteenBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FourteenBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={FifthteenBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <section className="SectionCaruselBackground TopMarginSectionOfCatalogCarusel">
        <UniversalCarusel
          items={SixteenBordersRoseCarusel}
          type="borders"
          slidesToShow={1}
        />
      </section>
      <Footer />
    </div>
  );
};

export default BordersRose;
