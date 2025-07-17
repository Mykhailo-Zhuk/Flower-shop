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

type ReviewsData = {
  icon: string;
  nameOfUser: string;
  textOfReview: string;
  rating: number;
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
  link: string;
};

type ThirdyBordersRoseCaruselViewed = {
  titleOfBordersRoseCarusel: string;
  imagesRoses: { img1: string; img2: string; img3: string };
  // IsAvailable: string;
  PriceOfBordersRoseCarusel: string;
  // rating: number;
  // link: string;
};

type UniversalCarouselProps = {
  items:
    | RoseCatalogCarusel[]
    | EnglandRoseCarusel[]
    | TeaHybride[]
    | BordersRose[]
    | ViewedRose[]
    | CreepingRoseCarusel[]
    | ThirdyBordersRoseCaruselViewed[]
    | ReviewsData[];
  type:
    | "catalogOfHomePage"
    | "catalog"
    | "catalogOfViewed"
    | "england"
    | "teahybride"
    | "borders"
    | "viewed"
    | "creeping"
    | "thirdyBordersRoseCaruselViewed"
    | "reviews";
  slidesToShow?: number;
  style?: React.CSSProperties;
  TitleOfPopularRosesTypes?: string;
  arrowType?: "light-green" | "dark-green";
};

const UniversalCarusel: React.FC<UniversalCarouselProps> = ({
  items,
  type,
  slidesToShow = 2,
  style,
  TitleOfPopularRosesTypes,
  arrowType = "light-green", // значення за замовчуванням
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
        breakpoint: 1200,
        settings: {
          slidesToShow,
          slidesToScroll: slidesToShow,
        },
      },
    ],
  };

  // Функція для рендеру потрібних кнопок
  const renderArrows = () => {
    if (arrowType === "light-green") {
      return (
        <>
          <button
            className="custom-arrow custom-arrow-left"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <span className="custom-arrow-icon-light-green custom-arrow-icon-left-light-green" />
          </button>
          <button
            className="custom-arrow custom-arrow-right"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <span className="custom-arrow-icon-light-green custom-arrow-icon-right-light-green" />
          </button>
        </>
      );
    }
    if (arrowType === "dark-green") {
      return (
        <>
          <button
            className="custom-arrow custom-arrow-left"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <span className="custom-arrow-icon-dark-green custom-arrow-icon-left-dark-green" />
          </button>
          <button
            className="custom-arrow custom-arrow-right"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <span className="custom-arrow-icon-dark-green custom-arrow-icon-right-dark-green" />
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <div
      className="ContainerCaruselWidth"
      style={{
        ...style,
        background: type === "reviews" ? "transparent" : undefined,
        // width: type === "reviews" ? "50%" : "60%",
      }}
    >
      {TitleOfPopularRosesTypes && (
        <h2 style={{ textAlign: "left" }}>{TitleOfPopularRosesTypes}</h2>
      )}
      <Slider ref={sliderRef} {...settings}>
        {type === "catalogOfHomePage" &&
          (items as RoseCatalogCarusel[]).map((item, idx) => (
            <div className="SlideContainerСatalogOfHomePage" key={idx}>
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
              <h1 className="TitleOfCaruselСatalogOfHomePage">
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
            <div className="SlideContainerCatalog" key={idx}>
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
        {type === "catalogOfViewed" &&
          (items as RoseCatalogCarusel[]).map((item) => (
            <div
              style={{ border: "2px solid #b8ccae" }}
              className="SlideContainerСatalogOfHomePage"
            >
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imgHybridRose})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></div>
              <h1 className="TitleOfCaruselGreenRosesEnglandViewed">
                {item.TitleOfHybridRose}
              </h1>{" "}
              <h3 className="PriceOfCaruselGreenRosesEnglandViewed">
                {item.priceHybridRose}
              </h3>
            </div>
          ))}
        {type === "thirdyBordersRoseCaruselViewed" &&
          (items as ThirdyBordersRoseCaruselViewed[]).map((item) => (
            <div
              style={{ border: "2px solid #b8ccae" }}
              className="SlideContainerСatalogOfHomePage"
            >
              <div
                className="WidthOfcontainerSlides"
                style={{
                  backgroundImage: `url(${item.imagesRoses.img1})`, // ← виправлено
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></div>
              <h1 className="TitleOfCaruselGreenRosesEnglandViewed">
                {item.titleOfBordersRoseCarusel}
              </h1>{" "}
              <h3 className="PriceOfCaruselGreenRosesEnglandViewed">
                {item.PriceOfBordersRoseCarusel}
              </h3>
              {/* <div className="ContainerButtonOfCatalogDisplayAndGap">
                <Counter />
                <button
                  className="BuyButton"
                  style={{ width: "fit-content", margin: "0 auto" }}
                  type="submit"
                >
                  <img
                    src="/ЕлементиАнглійськіТроянди/24.png"
                    height={"30px"}
                    alt="BuyCart"
                  />{" "}
                  Купити
                </button>
              </div> */}
            </div>
          ))}
        {type === "reviews" &&
          (items as ReviewsData[]).map((items, idx) => (
            <div key={idx} className="ReviewsContainer">
              <div className="reviewCard">
                <div className="iconContainer">
                  <img
                    className="ImgOfIconReviews"
                    src={items.icon}
                    alt={items.nameOfUser}
                  />
                </div>
                <div className="RatingContainer">
                  <Rating value={Number(items.rating) || 0} readOnly />
                </div>
                <div className="textOfReviewsContainer">
                  <p>{items.textOfReview}</p>
                </div>
                <div className="nameOfUserContainer">
                  <h1 className="nameOfUserH1">{items.nameOfUser}</h1>
                </div>
              </div>
              <div className="moreReviewsBtnWrapper">
                <button className="moreReviewsBtn">
                  ЧИТАТИ БІЛЬШЕ ВІДГУКІВ
                </button>
              </div>
            </div>
          ))}
      </Slider>
      {renderArrows()}
    </div>
  );
};

export default UniversalCarusel;
