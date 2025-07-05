import { useEffect } from "react";
import { saveViewedRose } from "../../lib/utils";

type WatchedProps = {
  data: {
    titleOfEnglandRose: string;
    imagesRoses: { img1: string };
    PriceOfEnglandRose: string;
    rating: number;
    // додайте інші потрібні поля
  };
};

const Watched: React.FC<WatchedProps> = ({ data }) => {
  useEffect(() => {
    if (data) {
      saveViewedRose({
        id: data.titleOfEnglandRose,
        title: data.titleOfEnglandRose,
        image: data.imagesRoses.img1,
        price: data.PriceOfEnglandRose,
        rating: data.rating,
        link: "/catalog-of-roses/catalog-england-rose/some-link",
      });
    }
  }, [data]);

  return null; // або ваш UI
};

export default Watched;
