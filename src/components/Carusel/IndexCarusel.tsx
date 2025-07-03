import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import "../../styles/base.css";
import "../../styles/embla.css";

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };

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
};

const IndexCarusel: React.FC<Props> = ({ slides, type }) => (
  <EmblaCarousel slides={slides} type={type} options={OPTIONS} />
);

export default IndexCarusel;
