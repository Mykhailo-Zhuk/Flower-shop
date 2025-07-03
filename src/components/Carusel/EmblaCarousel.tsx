import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Counter from "../Counter/Counter";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowButtons";
import { useDotButton, DotButton } from "./EmblaCarouselDotButton";
import "../../styles/base.css";
import "../../styles/embla.css";

type CatalogDataMainPageType = {
  titleOfCatalog: string;
  backgroundImages: string;
};

type CatalogHybridRoseSeedlingsType = {
  TitleOfHybridRose: string;
  imgHybridRose: string;
  priceHybridRose: string;
};

type Props = {
  slides: CatalogDataMainPageType[] | CatalogHybridRoseSeedlingsType[];
  type: "catalog" | "rose";
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<Props> = ({ slides, type, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Кнопки
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Точки
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot" +
                (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item: any, idx: number) => (
            <div className="embla__slide" key={idx}>
              {type === "catalog" ? (
                <>
                  <img
                    src={item.backgroundImages.replace("/public", "")}
                    alt={item.titleOfCatalog}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
                  <h1 className="EmblaCaruselTitle">{item.titleOfCatalog}</h1>
                  <Counter />
                </>
              ) : (
                <>
                  <img
                    src={item.imgHybridRose.replace("/public", "")}
                    alt={item.TitleOfHybridRose}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
                  <h1 className="EmblaCaruselTitle">
                    {item.TitleOfHybridRose}
                  </h1>
                  <h3 className="EmblaCaruselHybrydPrice">
                    {item.priceHybridRose}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot" +
                (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
