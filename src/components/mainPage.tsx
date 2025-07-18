import "../styles/mainPage.css";
import UniversalCarusel from "./Carusel/UniversalCarusel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
// import { CarouselDemo } from "./Carusel/CarouselSize";
import Footer from "./Footer/Footer";
import {
  CatalogDataMainPage,
  advantagesMainPage,
  CaruselHybridRoseSeedlings,
  ReviewsDataMainPage,
} from "../Data/mainMenuData";

type CatalogItem = {
  titleOfCatalog: string;
  backgroundImages: string;
};

const MainPage: React.FC = () => {
  const catalogItems: CatalogItem[] = CatalogDataMainPage;
  return (
    <div className="SectionColumnsGaps">
      <HeaderMenu />
      <section className="Section3">
        <video
          height={"60%"}
          width={"100%"}
          src="/public/ГоловнаСторінка/flowerBlooming.mp4"
          loop
          autoPlay
          muted
        ></video>
      </section>
      <section className="Section4">
        <div className="titleOfCatalog">
          <h2 className="headerOfCatolog">Каталог</h2>
        </div>

        <div className="DisplayCenter">
          <div className="ColumnOfCatalog">
            {catalogItems.map((item, idx) => (
              <div
                key={idx}
                className="catalog-item"
                style={{
                  backgroundImage: `url(${item.backgroundImages})`,
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div className="headerContainer">
                  <h3 className="headerCatalogu">{item.titleOfCatalog}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Section5">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">ТОП продажів</h2>
        </div>
        <div className="MarginSectionOfCarusel">
          <UniversalCarusel
            slidesToShow={2}
            items={CaruselHybridRoseSeedlings}
            type="catalogOfHomePage"
            arrowType="dark-green"
          />
        </div>
      </section>
      <section className="Section6">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">Популярні товари</h2>
        </div>
        <div className="MarginSectionOfCarusel">
          <UniversalCarusel
            slidesToShow={2}
            items={CaruselHybridRoseSeedlings}
            type="catalogOfHomePage"
            arrowType="dark-green"
          />
        </div>
      </section>
      <section className="Section7">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">Акційні товари</h2>
        </div>
        <div className="MarginSectionOfCarusel">
          <UniversalCarusel
            slidesToShow={2}
            items={CaruselHybridRoseSeedlings}
            type="catalogOfHomePage"
            arrowType="dark-green"
          />
        </div>
      </section>

      <section className="Section8">
        <div className="">
          <h2 className="headerOfTitlePerevagy">НАШІ ПЕРЕВАГИ</h2>
        </div>
        <div className="Section8Background">
          <div className="DisplayCenter">
            <div className="ColumnOfPerevagy">
              {advantagesMainPage.map((item, idx) => (
                <div key={idx} className="advantages-item">
                  <img
                    src={item.img.replace("../../public", "")}
                    alt={item.titleOfAdvantages}
                    className="advantages-image"
                  />

                  <h3 className="advantages-title">
                    {item.NumbersWithBackground &&
                      item.NumbersWithBackground.trim() !== "" && (
                        <em className="BackgroundNumber">
                          {item.NumbersWithBackground}
                        </em>
                      )}

                    {item.titleOfAdvantages}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="SectionCaruselOfReviews">
        <div className="">
          <h2 className="headerOfTitlePerevagy">Відгуки про нас</h2>
        </div>
        <div className="MarginSectionOfCarusel reviews-carousel">
          <UniversalCarusel
            slidesToShow={1}
            items={ReviewsDataMainPage}
            type="reviews"
            arrowType="dark-green"
          />
        </div>
      </section>
      <section className="Section9">
        <div className="text-block">
          <h1>САДЖАНЦІ ДЕРЕВ ТА РОСЛИН ВІД МАГАЗИНУ</h1>
          <h2>«ALYONA’S GARDEN»</h2>
          <p>
            Шановні друзі! Ласкаво просимо до нашого інтернет-магазину
            саджанців. Вже більше 10-ти років ми вирощуємо різні рослини,
            величезну кількість плодових дерев як для садівників-початківців,
            так і для любителів живої краси на своїй ділянці, пропонуємо оптові
            пропозиції для фермерських господарств, співпрацюємо з садовими
            центрами та ландшафтними дизайнерами.
          </p>
          <p>
            Широкий асортимент товару допоможе нашому покупцю підібрати усе
            необхідне для садівництва чи городництва. Ми піклуємося про те, щоб
            Ви вчасно отримали свою покупку з нашого складу. На нашому сайті Ви
            можете залишити свої відгуки. Наші менеджери завжди охоче
            відповідають, консультують і вибирають замовлення з кожним
            індивідуально, надаючи професійні поради.
          </p>
          <p>
            Ми відправляємо саджанці поштою по всій відкритій території України.
          </p>
        </div>
        <div className="imageOfMainSubject">
          <img
            src="/public/ГоловнаСторінка/43.png"
            alt="mainSubjectImage"
            height={"100%"}
            width={"100%"}
            className="imageOfMainSubjectImage"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
