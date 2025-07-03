import "../styles/mainPage.css";
import IndexCarusel from "./Carusel/IndexCarusel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Footer from "./Footer/Footer";
import { CatalogDataMainPage, advantagesMainPage } from "../Data/mainMenuData";

type CatalogItem = {
  titleOfCatalog: string;
  backgroundImages: string;
};

const MainPage: React.FC = () => {
  const catalogItems: CatalogItem[] = CatalogDataMainPage;
  return (
    <div>
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
        <IndexCarusel slides={CatalogDataMainPage} type="catalog" />
      </section>
      <section className="Section6">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">Популярні товари</h2>
        </div>
        <IndexCarusel slides={CatalogDataMainPage} type="catalog" />
      </section>
      <section className="Section7">
        <div className="titleOfCatalog">
          <h2 className="headerOfCarulesTitle">Акційні товари</h2>
        </div>
        <IndexCarusel slides={CatalogDataMainPage} type="catalog" />
      </section>
      <div className="titleOfCatalogWithoutBackground">
        <h2 className="headerOfTitle">Новинки</h2>
      </div>
      <section className="Section8">
        <div className="DisplayCenter">
          <div className="ColumnOfPerevagy">
            {advantagesMainPage.map((item, idx) => (
              <div key={idx} className="advantages-item">
                <img
                  src={item.img.replace("../../public", "")}
                  alt={item.titleOfAdvantages}
                  height={"80px"}
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
      </section>
      <section className="Section9">
        <div className="titleOfSiteOpis">
          <h1>САДЖАНЦІ ДЕРЕВ ТА РОСЛИН ВІД МАГАЗИНУ 'ALYONA'S GARDEN'</h1>
        </div>
        <div className="columnTextImage">
          <div className="mainSubjectOfCompani">
            <p>
              Шановні друзі! <br /> Ласкаво просимо до нашого інтернет-магазину
              саджанців. Вже більше 10-ти років ми вирощуємо різні рослини,
              величезну кількість плодових дерев як для садівників-початківців,
              так і для любителів живої краси на своїй ділянці, пропонуємо
              оптові пропозиції для фермерських господарств, співпрацюємо з
              садовими центрами та ландшафтними дизайнерами. Широкий асортимент
              товару допоможе нашим покупцям підібрати усе необхідне для
              садівництва чи городництва. Ми піклуємося про те, щоб Ви вчасно
              отримали свою покупку у належному стані. На нашому сайті Ви можете
              залишити свої відгуки. Наші менеджери допоможуть Вам зробити
              правильний вибір, ознайомлять з кожним видом саджанців, нададуть
              професійну допомогу. Ми відправляємо саджанці поштою по всій
              підконтрольній території України.
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
