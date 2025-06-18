import React from "react";
import EmblaCarousel from "../Carusel/EmblaCarusel";
import "../../styles/base.css";

import "../../styles/embla.css";

// Замість EmblaOptionsType використовуйте any або власний тип:
const OPTIONS: any = { slidesToScroll: "auto" };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const IndexCarusel: React.FC = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);

export default IndexCarusel;
