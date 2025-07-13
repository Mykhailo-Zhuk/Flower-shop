import { Outlet } from "react-router-dom";
import DrawerMenu from "./components/HeaderMenu/Drawer";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage";
import "./App.css";
function App() {
  return (
    <>
      <DrawerMenu />
      <MainPage />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
