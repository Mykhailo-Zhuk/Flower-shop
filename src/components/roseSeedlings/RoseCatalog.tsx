import type React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import {
  CatalogOfPopularRosesTypes,
  TextForCatalogPage,
  CareAndSecretsOfGrowingRoses,
  CaruselHybridRoseSeedlings,
  carouselTitlePopularyti,
} from "../../Data/mainMenuData";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Footer from "../Footer/Footer";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import "../../styles/CatalogOfRoses.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SortByInput from "../SortBy/SortByInput";
import { getViewedRoses } from "../../lib/utils";
import type { ViewedRose } from "../../lib/utils";
import { useEffect, useState } from "react";
import type { CatalogHybridRoseSeedlingsType } from "../../Data/mainMenuData";

const RoseCatalog: React.FC = () => {
  const [viewed, setViewed] = useState<ViewedRose[]>([]);

  // Оновлювати при кожному відкритті сторінки
  useEffect(() => {
    const updateViewed = () => {
      const roses = getViewedRoses();
      setViewed(roses);
    };

    updateViewed();

    window.addEventListener("storage", updateViewed);
    return () => window.removeEventListener("storage", updateViewed);
  }, []);

  const catalogPopularRoses: CatalogHybridRoseSeedlingsType[] =
    CatalogOfPopularRosesTypes;

  return (
    <>
      <HeaderMenu />
      <BreadCrumb />
      <section className="Section1Rose">
        <div className="ContainerOfCatalogPopularRoses">
          <h1 className="TitleOfSection1">САДЖАНЦІ ТРОЯНД</h1>
          <SortByInput />
          <div className="ColumnOfCatalogPopularRoses">
            {catalogPopularRoses.map((rose, idx) => (
              <div key={idx} className="">
                <img
                  src={rose.imgTypeOfRose}
                  className="CatalogPopularImages"
                  alt={rose.TitleTypeOfRose}
                />
                <Link
                  className="LinksStyles"
                  component={RouterLink}
                  to={rose.route}
                  underline="none"
                >
                  <h3 className="CatalogPopularTitle">
                    {rose.TitleTypeOfRose}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{ marginTop: "70px" }}
        className="SectionCaruselBackground"
      >
        <UniversalCarusel
          items={CaruselHybridRoseSeedlings}
          TitleOfPopularRosesTypes={carouselTitlePopularyti[0].AlsoWatchTitle}
          type="catalog"
        />
      </section>
      <section className="Section2Rose">
        {TextForCatalogPage.map((item, idx) => (
          <div key={idx}>
            {item.TitleOfPrefaceOfCatalogBlack && (
              <h1 className="TitleOfPrefaceBlackBold">
                {item.TitleOfPrefaceOfCatalogBlack}
              </h1>
            )}
            {item.prefaceOfCatalogOfRoses && (
              <h1 className="AboutCompaniOfPrefaceBlackBold">
                {item.prefaceOfCatalogOfRoses}
              </h1>
            )}
            <div className="containerOfCareInstruction">
              {item.GreenTitleOfCatalogOfRoses && (
                <h1 className="TitleToLeft">
                  {item.GreenTitleOfCatalogOfRoses}
                </h1>
              )}
              {item.TextOfCatalogOfRoses && (
                <h3 className="textLiOfCare">{item.TextOfCatalogOfRoses}</h3>
              )}
            </div>
            {item.UpdateCatalogpreface && (
              <h3 className="TitleOfPrefaceBlackBold">
                {item.UpdateCatalogpreface}
              </h3>
            )}
            {item.linkGreenOfCatalogRoses && (
              <h3 className="LinkToBuy">{item.linkGreenOfCatalogRoses}</h3>
            )}
          </div>
        ))}
      </section>
      <section className="Section3Rose">
        {CareAndSecretsOfGrowingRoses.map((liItem, idx) => (
          <div key={idx} className="">
            <h2 className="TitleOfPrefaceBlackBold">
              {liItem.TitleOfSecretsOfGrowingRoses}
            </h2>
            <p className="TitleOfPrefaceBlackBold">
              {liItem.prefaceCareAndSecretsOfGrowingRoses}
            </p>

            <div className="HowToCareIconAndTextContainer">
              <img src={liItem.ImagesTypeOfCare} height={"60%"} alt="" />
              <p className="HowToCareIconAndText">{liItem.TypesOfCares}</p>
            </div>
            <div>
              {liItem.ulOfCareOfRoses &&
              typeof liItem.ulOfCareOfRoses === "object" ? (
                <ul className="ULLiOfCare">
                  {Object.values(liItem.ulOfCareOfRoses).map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              ) : (
                <div>{liItem.ulOfCareOfRoses}</div>
              )}
            </div>
          </div>
        ))}
      </section>
      {viewed.length > 0 && (
        <section
          style={{ marginTop: "70px" }}
          className="SectionCaruselBackground"
        >
          <UniversalCarusel
            items={viewed}
            type="viewed"
            TitleOfPopularRosesTypes="Переглянуті товари"
          />
        </section>
      )}
      <Footer />
    </>
  );
};

export default RoseCatalog;
