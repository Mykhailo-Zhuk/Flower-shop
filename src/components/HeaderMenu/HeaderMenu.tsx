import MenuDataMainPage from "../../Data/mainMenuData";
import Drawer from "../HeaderMenu/Drawer";
import "../../styles/mainPage.css";
type MenuItem = {
  name: string;
  link: string;
  img: string;
};

const HeaderMenu = () => {
  const menuItems: MenuItem[] = MenuDataMainPage;
  return (
    <div>
      <section className="Section1">
        <div className="logo">
          <img
            src="/public/ГоловнаСторінка/2.png"
            alt="logo Alyona's Garden"
            className="logoImage"
          />
        </div>
      </section>
      <section className="Section2">
        <div className="DrawerContainer">
          <Drawer />
        </div>
        <div className="ulMenu">
          <ul className="MenuULSelect">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="LiMenuSelect" href={item.link}>
                  <img
                    src={item.img.replace("../../public", "")}
                    alt={item.name}
                  />
                  <span className="menu-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HeaderMenu;
