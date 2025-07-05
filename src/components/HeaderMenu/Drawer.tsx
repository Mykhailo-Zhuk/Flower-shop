import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd";
import { Link } from "react-router-dom";
import "../../styles/mainPage.css";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="DrawerLogo" onClick={showDrawer}>
        <img
          src="/public/ГоловнаСторінка/4.png"
          height={"100%"}
          alt="BurgerMenu"
        />
      </button>

      <Drawer
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <details>
          <summary>
            <Link className="LinkToRoses" to={"/catalog-of-roses"}>
              КАТАЛОГ РОЗ
            </Link>
          </summary>

          <Link
            className="LinkToRoses"
            to={"/catalog-of-roses/catalog-england-rose"}
          >
            АНГЛІЙСЬКІ
          </Link>
          <br />
          <Link
            className="LinkToRoses"
            to={"/catalog-of-roses/catalog-tea-hybride-rose"}
          >
            ЧАЙНО-ГІБРИДНІ
          </Link>
          <br />
          <Link
            className="LinkToRoses"
            to={"catalog-of-roses/catalog-creeping-rose"}
          >
            ПЛЕТИСТІ
          </Link>
          <br />
          <Link
            className="LinkToRoses"
            to={"/catalog-of-roses/catalog-borders-rose"}
          >
            БОРДЮРНI
          </Link>
        </details>
      </Drawer>
    </>
  );
};

export default App;
