import type React from "react";
import { Link } from "react-router-dom";
import {
  CatalogOfPopularRosesTypes,
  TextForCatalogPage,
  CareAndSecretsOfGrowingRoses,
} from "../../Data/mainMenuData";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Footer from "../Footer/Footer";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import "../../styles/CatalogOfRoses.css";
import { CaruselHybridRoseSeedlings } from "../../Data/mainMenuData";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SortByInput from "../SortBy/SortByInput";

type CatalogHybridRoseSeedlingsType = {
  TitleTypeOfRose: string;
  imgTypeOfRose: string;
  route: string;
};

type TextPrefaceOfCatalogRose = {
  TitleOfPrefaceOfCatalogBlack?: string;
  prefaceOfCatalogOfRoses?: string;
  GreenTitleOfCatalogOfRoses?: string;
  TextOfCatalogOfRoses?: string;
  UpdateCatalogpreface?: string;
  linkGreenOfCatalogRoses?: string;
};

type CareAndSecretsOfRoses = {
  TitleOfSecretsOfGrowingRoses?: string;
  prefaceCareAndSecretsOfGrowingRoses?: string;
  TypesOfCares?: string;
  ImagesTypeOfCare?: string;
  ulOfCareOfRoses?: string | Record<string, string>;
};

const RoseCatalog: React.FC = () => {
  const catalogPopularRoses: CatalogHybridRoseSeedlingsType[] =
    CatalogOfPopularRosesTypes;
  const textOfPreface: TextPrefaceOfCatalogRose = TextForCatalogPage[0];
  const textCareOfRose =
    CareAndSecretsOfGrowingRoses[0] as CareAndSecretsOfRoses;
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
                <Link className="LinksStyles" to={rose.route}>
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
        <UniversalCarusel items={CaruselHybridRoseSeedlings} type="catalog" />
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
            <h2>{liItem.TitleOfSecretsOfGrowingRoses}</h2>
            <p>{liItem.prefaceCareAndSecretsOfGrowingRoses}</p>
            <img src={liItem.ImagesTypeOfCare} alt="" />
            <div>{liItem.TypesOfCares}</div>
            <div>
              {liItem.ulOfCareOfRoses &&
              typeof liItem.ulOfCareOfRoses === "object" ? (
                <ul>
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
      <Footer />
    </>
  );
};

export default RoseCatalog;
