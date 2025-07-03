import React, { useRef } from "react";
import Counter from "../Counter/Counter";
import Slider from "react-slick";
import Rating from "../Rating/Rating";
import "../../styles/Carusel.css";

type RoseCatalogCarusel = {
  TitleOfHybridRose: string;
  imgHybridRose: string;
  priceHybridRose: string;
  ratingOfCatalogRoses: string;
};

type EnglandRoseCarusel = {
  titleOfEnglandRose: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  IsAvailable: string;
  PriceOfEnglandRose: string;
  rating: number;
};

type TeaHybride = {
  titleOfTeaHybrideRose: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  IsAvailable: string;
  PriceOfTeaHybride: string;
  rating: number;
};

type BordersRose = {
  titleOfBordersRoseCarusel: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  IsAvailable: string;
  PriceOfBordersRoseCarusel: string;
  rating: number;
};

type UniversalCarouselProps = {
  items:
    | RoseCatalogCarusel[]
    | EnglandRoseCarusel[]
    | TeaHybride[]
    | BordersRose[];
  type: "catalog" | "england" | "teahybride" | "borders";
  slidesToShow?: number;
  style?: React.CSSProperties;
};

const UniversalCarusel: React.FC<UniversalCarouselProps> = ({
  items,
  type,
  slidesToShow = 2,
  style,
}) => {
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="ContainerCaruselWidth"
      style={{
        ...style,
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {type === "catalog" &&
          (items as RoseCatalogCarusel[]).map((item, idx) => (
            <div className="SlideContainer" key={idx}>
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imgHybridRose})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></div>

              <Rating value={Number(item.ratingOfCatalogRoses) || 0} readOnly />
              <h1 className="TitleOfCaruselCatalog">
                {item.TitleOfHybridRose}
              </h1>

              <div className="ContainerButtonOfCatalogDisplayAndGap">
                <h3
                  style={{ margin: "0", padding: "0" }}
                  className="PriceOfCaruselCatalog"
                >
                  {item.priceHybridRose}
                </h3>
                <Counter />
                <button
                  className="BuyButton"
                  style={{ width: "fit-content", margin: "0 auto" }}
                  type="submit"
                >
                  <img
                    src="/public/ЕлементиАнглійськіТроянди/24.png"
                    height={"30px"}
                    alt="BuyCart"
                  />{" "}
                  Купити
                </button>
              </div>
            </div>
          ))}
        {type === "england" &&
          (items as EnglandRoseCarusel[]).map((item, idx) => (
            <div className="SlideContainer" key={idx}>
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imagesRoses.img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              >
                <p className="IsAvailable">{item.IsAvailable}</p>
                <div className="ratingBottom">
                  <Rating value={Number(item.rating) || 0} readOnly />
                </div>
              </div>

              <h1 className="TitleOfCaruselGreenRosesEngland">
                {item.titleOfEnglandRose}
              </h1>
              <div className="DetalicButtonContainer">
                <button className="DetalicButton" type="submit">
                  Детальніше
                </button>
              </div>
              <h3 className="PriceOfCaruselGreenRosesEngland">
                {item.PriceOfEnglandRose}
              </h3>
              <Counter />

              <div className="BuyButtonContainer">
                <button className="BuyButton" type="submit">
                  <img
                    src="/public/ЕлементиАнглійськіТроянди/24.png"
                    height={"30px"}
                    alt="BuyCart"
                  />{" "}
                  Купити
                </button>
              </div>
            </div>
          ))}

        {type === "teahybride" &&
          (items as TeaHybride[]).map((item, idx) => (
            <div className="SlideContainer" key={idx}>
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imagesRoses.img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              >
                <p className="IsAvailable">{item.IsAvailable}</p>
                <div className="ratingBottom">
                  <Rating value={Number(item.rating) || 0} readOnly />
                </div>
              </div>
              <h1 className="TitleOfCaruselGreenRosesEngland">
                {item.titleOfTeaHybrideRose}
              </h1>
              <h3 className="PriceOfCaruselGreenRosesEngland">
                {item.PriceOfTeaHybride}
              </h3>
            </div>
          ))}
        {type === "borders" &&
          (items as BordersRose[]).map((item, idx) => (
            <div className="SlideContainer" key={idx}>
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imagesRoses.img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              >
                <p className="IsAvailable">{item.IsAvailable}</p>
                <div className="ratingBottom">
                  <Rating value={Number(item.rating) || 0} readOnly />
                </div>
              </div>

              <h1 className="TitleOfCaruselGreenRosesEngland">
                {item.titleOfBordersRoseCarusel}
              </h1>
              <div className="DetalicButtonContainer">
                <button className="DetalicButton" type="submit">
                  Детальніше
                </button>
              </div>
              <h3 className="PriceOfCaruselGreenRosesEngland">
                {item.PriceOfBordersRoseCarusel}
              </h3>
              <Counter />

              <div className="BuyButtonContainer">
                <button className="BuyButton" type="submit">
                  <img
                    src="/public/ЕлементиАнглійськіТроянди/24.png"
                    height={"30px"}
                    alt="BuyCart"
                  />{" "}
                  Купити
                </button>
              </div>
            </div>
          ))}
      </Slider>
      {/* Кастомні кнопки */}
      <button
        className="custom-arrow custom-arrow-left"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        &#8592;
      </button>
      <button
        className="custom-arrow custom-arrow-right"
        onClick={() => sliderRef.current?.slickNext()}
      >
        &#8594;
      </button>
    </div>
  );
};

export default UniversalCarusel;
