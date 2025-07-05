import React, { useRef } from "react";
import Counter from "../Counter/Counter";
import Slider from "react-slick";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import "../../styles/Carusel.css";
import type { ViewedRose } from "@/lib/utils";

type RoseCatalogCarusel = {
  TitleOfHybridRose: string;
  imgHybridRose: string;
  priceHybridRose: string;
  ratingOfCatalogRoses: string;
};

type CreepingRoseCarusel = {
  titleOfСreepingRoseCarusel: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  IsAvailable: string;
  PriceOfСreepingRoseCarusel: string;
  rating: number;
  link: string;
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
  link: string;
};

type BordersRose = {
  titleOfBordersRoseCarusel: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  IsAvailable: string;
  PriceOfBordersRoseCarusel: string;
  rating: number;
  link: string; // Додано поле link
};

type UniversalCarouselProps = {
  items:
    | RoseCatalogCarusel[]
    | EnglandRoseCarusel[]
    | TeaHybride[]
    | BordersRose[]
    | ViewedRose[]
    | CreepingRoseCarusel[];
  type:
    | "catalogOfHomePage"
    | "catalog"
    | "england"
    | "teahybride"
    | "borders"
    | "viewed"
    | "creeping";
  slidesToShow?: number;
  style?: React.CSSProperties;
  TitleOfPopularRosesTypes?: string;
};

const UniversalCarusel: React.FC<UniversalCarouselProps> = ({
  items,
  type,
  slidesToShow = 2,
  style,
  TitleOfPopularRosesTypes,
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
      {TitleOfPopularRosesTypes && (
        <h2 style={{ textAlign: "left" }}>{TitleOfPopularRosesTypes}</h2>
      )}
      <Slider ref={sliderRef} {...settings}>
        {type === "catalogOfHomePage" &&
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
              <div className="ratingCenter">
                <Rating
                  value={Number(item.ratingOfCatalogRoses) || 0}
                  readOnly
                />
              </div>
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
              <div className="ratingCenter">
                <Rating
                  value={Number(item.ratingOfCatalogRoses) || 0}
                  readOnly
                />
              </div>
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
                <p className="IsAvailable " style={{ color: "black" }}>
                  {item.IsAvailable}
                </p>
                <div className="ratingBottom">
                  <Rating value={Number(item.rating) || 0} readOnly />
                </div>
              </div>
              <h1 className="TitleOfCaruselGreenRosesEngland">
                {item.titleOfTeaHybrideRose}
              </h1>

              <div className="CounterBlack">
                <div className="DetalicButtonContainer">
                  <Link
                    to={item.link}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <button
                      style={{ cursor: "pointer" }}
                      className="DetalicButton"
                      type="submit"
                    >
                      Детальніше
                    </button>
                  </Link>
                </div>
                <h3 className="PriceOfCaruselGreenRosesEngland">
                  {item.PriceOfTeaHybride}
                </h3>

                <Counter />
              </div>
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
        {type === "creeping" &&
          (items as CreepingRoseCarusel[]).map((item, idx) => (
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
                {item.titleOfСreepingRoseCarusel}
              </h1>
              <div className="DetalicButtonContainer">
                <button className="DetalicButton" type="submit">
                  Детальніше
                </button>
              </div>
              <h3 className="PriceOfCaruselGreenRosesEngland">
                {item.PriceOfСreepingRoseCarusel}
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
        {type === "viewed" &&
          (items as ViewedRose[]).map((item, idx) => (
            <div className="SlideContainer" key={item.id || idx}>
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></div>
              <div className="ratingCenter">
                <Rating value={Number(item.rating) || 0} readOnly />
              </div>
              <h1 className="TitleOfCaruselCatalog">{item.title}</h1>
              <div className="ContainerButtonOfCatalogDisplayAndGap">
                <h3 className="PriceOfCaruselCatalog">{item.price}</h3>
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
              <div style={{ marginTop: 10 }}>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <button className="DetalicButton" type="button">
                    Детальніше
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </Slider>
      {/* Кастомні кнопки */}
      <button
        className="custom-arrow custom-arrow-left"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <img src="/public/ЕлементиОписТроянди/36к.png" height={"50px"} alt="" />
      </button>
      <button
        className="custom-arrow custom-arrow-right"
        onClick={() => sliderRef.current?.slickNext()}
      >
        {" "}
        <img src="/public/ЕлементиОписТроянди/36.png" height={"50px"} alt="" />
      </button>
    </div>
  );
};

export default UniversalCarusel;
