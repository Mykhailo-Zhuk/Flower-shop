// import {
//   FirstСreepingRoseCarusel,
//   SecondСreepingRoseCarusel,
//   ThirdyСreepingRoseCarusel,
//   FourthСreepingRoseCarusel,
//   FifthСreepingRoseCarusel,
//   SixthСreepingRoseCarusel,
//   SeventhСreepingRoseCarusel,
//   EihgthСreepingRoseCarusel,
//   NinethСreepingRoseCarusel,
//   TenthСreepingRoseCarusel,
//   EleventhСreepingRoseCarusel,
//   TwelveСreepingRoseCarusel,
//   ThirteenСreepingRoseCarusel,
//   FourteenСreepingRoseCarusel,
//   FifthteenСreepingRoseCarusel,
//   SixteenСreepingRoseCarusel,
// } from "../../Data/mainMenuData";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Footer from "../Footer/Footer";
import SortByInput from "../SortBy/SortByInput";

// import UniversalCarusel from "../Carusel/UniversalCarusel";
const CreepingRoseCatalog = () => {
  return (
    <div className="CatalogOfRoses">
      <HeaderMenu />
      <BreadCrumb />
      <h1 className="TitleOfSection1">Плетисті ТРОЯНДи</h1>
      <SortByInput />
      <section className="SectionCaruselBackground">
        {/* <UniversalCarusel
      items={FirstСreepingRoseCarusel}
      type="creeping"
      slidesToShow={2}
    /> */}
      </section>
      <Footer />
    </div>
  );
};

export default CreepingRoseCatalog;
