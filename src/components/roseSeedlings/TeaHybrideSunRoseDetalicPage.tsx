import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Footer from "../Footer/Footer";
import {
  FifteenTeaHybrideRoseCarusel,
  CaruselHybridRoseSeedlings,
  carouselTitlePopularyti,
  OpisOfSunRose,
  ThirdyBordersRoseCarusel,
} from "../../Data/mainMenuData";
import Tabs from "../Tabs/Tabs";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import UniversalCarusel from "../Carusel/UniversalCarusel";
import Watched from "../Watched/Watched";
import "../../styles/TeaHybrideDetalic.css";
import { getViewedRoses } from "../../lib/utils";
import type { ViewedRose } from "../../lib/utils";
import { useEffect, useState } from "react";
import ReadMore from "../ReadMore/ReadMore";

const currentRose = {
  titleOfEnglandRose: "Sun Rose",
  imagesRoses: { img1: "/images/sun-rose.jpg" },
  PriceOfEnglandRose: "250 грн",
  rating: 4.5,
};

const TeaHybrideSunRoseDetalicPage = () => {
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

  return (
    <div className="CatalogOfRoses">
      <HeaderMenu />
      <BreadCrumb />
      <div className="">
        <section
          style={{ margin: "15px 0px" }}
          className="SectionCaruselBackground "
        >
          <UniversalCarusel
            items={FifteenTeaHybrideRoseCarusel}
            type="teahybride"
            slidesToShow={2}
          />
        </section>
        <section className="SectionOpisOfRoseSun">
          {OpisOfSunRose.map((item) => (
            <h1 className="titleOfOpis" key={item.titleOfSection}>
              {item.titleOfSection}
            </h1>
          ))}
          {OpisOfSunRose.map((item, idx) => (
            <p className="descriptionOfOpis" key={idx}>
              {item.description}
            </p>
          ))}
          {OpisOfSunRose.map((item, idx) => (
            <div
              key={idx}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img src={item.img1} alt="" style={{ height: "30px" }} />
              <strong>{item.titleOfSectionCharecter}</strong>
            </div>
          ))}
          <ul className="ListOfOpisRoseSun">
            {OpisOfSunRose.map((item, idx) => (
              <ul key={idx}>
                <li>Тип: {item.characteristics.type}</li>
                <li>Висота: {item.characteristics.height}</li>
                <li>Колір: {item.characteristics.color}</li>
                <li>Розмір квітки: {item.characteristics.flowerSize}</li>
              </ul>
            ))}
          </ul>
          <div className="readMore">
            <ReadMore />
          </div>
        </section>
        <section className="TabsSection">
          <Tabs />
        </section>
        <section
          style={{ marginTop: "70px" }}
          className="SectionCaruselBackground"
        >
          <UniversalCarusel
            items={CaruselHybridRoseSeedlings}
            TitleOfPopularRosesTypes={carouselTitlePopularyti[0].AlsoWatchTitle}
            type="catalogOfHomePage"
          />
        </section>
        {viewed.length > 0 && (
          <section
            style={{ margin: "30px 0px " }}
            className="SectionCaruselBackground"
          >
            <UniversalCarusel
              items={ThirdyBordersRoseCarusel}
              type="thirdyBordersRoseCaruselViewed"
              TitleOfPopularRosesTypes="Переглянуті товари"
            />
          </section>
        )}
      </div>
      <Watched data={currentRose} />
      <Footer />
    </div>
  );
};

export default TeaHybrideSunRoseDetalicPage;
