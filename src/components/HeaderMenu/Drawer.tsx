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
        title="Drawer with extra actions"
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
        <Link style={{ color: "black" }} to={"/catalog-of-roses"}>
          Roses
        </Link>
        <br />
        <Link style={{ color: "black" }} to={"/catalog-england-rose"}>
          England Roses
        </Link>
        <br />
        <Link style={{ color: "black" }} to={"/catalog-tea-hybride-rose"}>
          Tea-Hybride Roses
        </Link>
        <br />
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
