import React from "react";
import Counter from "../Counter/Counter";
// import { useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../Carusel/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Carusel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const itemsFlower = [
  {
    id: 1,
    name: "Роза червона",
    price: 100,
    img: "/public/ЕлементиАнглійськіТроянди/елементи англійські троянди/20.png",
  },
  {
    id: 2,
    name: "Роза біла",
    price: 120,
    img: "/public/ЕлементиБордюрніТроянди/елементи бордюрні троянди/22.png",
  },
  {
    id: 3,
    name: "Роза жовта",
    price: 90,
    img: "/public/ЕлементиБордюрніТроянди/елементи бордюрні троянди/23.png",
  },
];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  //   const [CountPlusToCart, setCountPlusToCart] = useState<number>(0);

  //   const handelPlusToCart = () => {
  //     setCountPlusToCart((prev) => prev + 1);
  //   };

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const item = itemsFlower[index % itemsFlower.length];
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <img
                    src={item.img}
                    height={"100%"}
                    width={"100%"}
                    alt={item.name}
                  />
                </div>
                <div key={item.id}>
                  <h3>{item.name}</h3>
                  <div>Ціна: {item.price} грн</div>
                  <Counter />
                </div>
              </div>
            );
          })}
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
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
