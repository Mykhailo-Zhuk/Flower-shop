import "../../styles/footer.css";
import AccordionUsage from "./Accordion";
const Footer = () => {
  return (
    <div className="FooterBody">
      <section className="Section11">
        {/* Logo of Footer */}
        <div className="logoOfFooter">
          <img
            src="/ГоловнаСторінка/45.png"
            alt="logo Alyona's Garden"
            className="logoImageFooter"
          />
        </div>
      </section>
      <section className="Section12">
        <div className="PhoneNumber">
          <img
            src="/public/ГоловнаСторінка/47.png"
            height={"50vh"}
            alt="Phone logo"
          />{" "}
          <span className="phoneNumberText">+380 99 999 99 99</span>
        </div>
      </section>
      <section className="Section13">
        <div className="CosialMedia">
          <div className="headerOfSocialMedia">
            <h3>Соц мережі:</h3>
          </div>
          <div className="icons">
            <img src="/public/ГоловнаСторінка/48.png" alt="facebookLogo" />
            <img src="/public/ГоловнаСторінка/49.png" alt="instagramLogo" />
            <img src="/public/ГоловнаСторінка/50.png" alt="telegramLogo" />
            <img src="/public/ГоловнаСторінка/51.png" alt="tikTokLogo" />
          </div>
        </div>
      </section>
      <section className="Section14">
        <div className="headerOfSocialMedia">
          <h3>СЛІДКУЙТЕ ЗА НОВИНКАМИ ТА АКЦІЯМИ:</h3>
        </div>
        <div className="DisplayCenter">
          <div className="input-container">
            <input
              placeholder="Введіть ваш e-mail"
              type="text"
              className="input"
            />
            <button type="submit">Підпишіться</button>
          </div>
        </div>
      </section>
      <section className="Section15">
        <div className="checkBox">
          <input type="checkbox" />
          <span>Я прочитала/ав Обмін та повернення, згіднален з вимогами</span>
        </div>
      </section>
      <AccordionUsage />
      <section className="Section16">
        <div className="footerText">
          <p>
            Alyona's Garden <em className="copyRight">&#169;</em> 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
