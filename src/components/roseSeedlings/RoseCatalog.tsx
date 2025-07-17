import type React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Link from "@mui/material/Link";
import {
  CatalogOfPopularRosesTypes,
  // TextForCatalogPage,
  ThirdyBordersRoseCarusel, // ← правильна назва
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
    <div className="CatalogOfRoses">
      <HeaderMenu />
      <BreadCrumb />
      <section className="Section1Rose">
        <div className="ContainerOfCatalogPopularRoses">
          <h1 className="TitleOfSection1">САДЖАНЦІ ТРОЯНД</h1>
          <SortByInput />
          <div className="ColumnOfCatalogPopularRoses">
            {catalogPopularRoses.map((rose, idx) => (
              <div
                key={idx}
                style={{
                  backgroundImage: `url(${rose.imgTypeOfRose})`,
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                className="catalog-itemrose"
              >
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
        <div className="MarginSectionOfCaruselRoseCatalog">
          <UniversalCarusel
            items={CaruselHybridRoseSeedlings}
            TitleOfPopularRosesTypes={carouselTitlePopularyti[0].AlsoWatchTitle}
            type="catalogOfViewed"
          />
        </div>
      </section>
      {viewed.length > 0 && (
        <section
          style={{ margin: "30px 0px " }}
          className="SectionCaruselBackground"
        >
          <div className="MarginSectionOfCaruselRoseCatalog">
            <UniversalCarusel
              items={ThirdyBordersRoseCarusel}
              type="thirdyBordersRoseCaruselViewed"
              TitleOfPopularRosesTypes="Переглянуті товари"
            />
          </div>
        </section>
      )}
      <div style={{ backgroundColor: "white" }} className="SectionColumnsGaps ">
        <section className="rose-intro ">
          <h1 className="rose-title">
            Купити саджанці троянд <br />в «Alyona’s Garden»
          </h1>

          <p className="rose-paragraph-after-title">
            Якщо ви шукаєте якісні саджанці троянд,{" "}
            <strong>«Alyona’s Garden»</strong> — ідеальне місце для вашого
            вибору! Тут представлений широкий асортимент сортів:
            <span className="highlighted-list">
              {" "}
              чайно-гібридні, плетисті, бордюрні та англійські троянди.
            </span>
          </p>

          <div className="rose-highlight-block">
            <h2 className="rose-highlight-title">Якість та надійність</h2>
            <p className="rose-paragraph">
              У <strong>«Alyona’s Garden»</strong> ви отримаєте{" "}
              <strong>здорові та міцні саджанці</strong>, вирощені у професійних
              умовах. Кожна рослина проходить ретельний контроль перед
              відправкою, що гарантує її швидке укорінення у вашому саду.
            </p>
          </div>
          <div className="rose-highlight-block">
            <h2 className="rose-highlight-title">Зручна доставка по Україні</h2>
            <p className="rose-paragraph">
              Замовлення оформлюється легко, а доставка здійснюється в
              найкоротші терміни. Ви отримуєте <strong> свіжі саджанці,</strong>{" "}
              готові до посадки, без стресу та зайвих турбот.
            </p>
          </div>
          <div className="rose-highlight-block">
            <h2 className="rose-highlight-title">
              Консультації та допомога у виборі
            </h2>
            <p className="rose-paragraph">
              Якщо вам потрібна порада щодо вибору сорту або догляду за
              трояндами, команда <strong> «Alyona’s Garden» </strong> завжди
              готова допомогти!
            </p>
          </div>
          <div className="rose-highlight-block">
            <p className="rose-paragraph-update">
              Оновіть свій сад разом із <strong> «Alyona’s Garden» </strong>–
              вибирайте троянди, які радуватимуть вас роками!
            </p>
            <h2 className="rose-link-title">
              Зробіть замовлення вже сьогодні!
            </h2>
          </div>
        </section>
        <section className="Section3Rose">
          {CareAndSecretsOfGrowingRoses.map((liItem, idx) => (
            <div key={idx} className="">
              <div className="TitleOfPrefaceBlackContainer">
                <h2 className="TitleOfPrefaceBlackBold">
                  {liItem.TitleOfSecretsOfGrowingRoses}
                </h2>
                <p className="TitleOfPrefaceBlack">
                  {liItem.prefaceCareAndSecretsOfGrowingRoses}
                </p>
              </div>
              <div className="HowToCareIconAndTextContainer">
                <img src={liItem.ImagesTypeOfCare} height={"60%"} alt="" />
                <p className="HowToCareIconAndText">{liItem.TypesOfCares}</p>
              </div>
              <div className="ULOfCareOfRosesContainer">
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
      </div>

      <Footer />
      <Outlet />
    </div>
  );
};

export default RoseCatalog;
