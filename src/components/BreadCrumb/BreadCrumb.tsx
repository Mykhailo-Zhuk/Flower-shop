import { Link as RouterLink, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "../../styles/BreadCrumb.css";
const PATH_NAMES: Record<string, string> = {
  "/catalog": "Саджанці",
  "/catalog/roses": "Саджанці Троянд",
  "/catalog/roses/england": "Англійські троянди",
  "/catalog/roses/tea": "Чайно-гібридні троянди",
  "/catalog/roses/borders": "Бордюрні троянди",
  "/catalog/roses/creeping": "Плетисті троянди",
  "/catalog/roses/tea/sunnyrose": "Троянда Сонячна",
};

export default function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    <Link
      key="home"
      component={RouterLink}
      to="/"
      underline="hover"
      color="inherit"
      style={{ display: "flex", alignItems: "center" }}
    >
      {/* <HomeIcon
        style={{ border: "DarkGreen", fontSize: 25, verticalAlign: "middle" }}
      /> */}
      <span style={{ verticalAlign: "middle" }}>
        <img
          height={"25px"}
          src={"/public/ЕлементиАнглійськіТроянди/10.png"}
          alt=""
        />
      </span>
    </Link>,
    ...pathnames.map((value, idx) => {
      const to = "/" + pathnames.slice(0, idx + 1).join("/");
      const label = PATH_NAMES[to] || decodeURIComponent(value);
      const isLast = idx === pathnames.length - 1;
      return isLast ? (
        <Typography key={to} color="inherit">
          {label}
        </Typography>
      ) : (
        <Link
          key={to}
          component={RouterLink}
          to={to}
          underline="hover"
          color="green"
        >
          {label}
        </Link>
      );
    }),
  ];

  return (
    <Breadcrumbs
      separator={<span style={{ fontSize: 24, margin: "0 4px" }}>/</span>}
      aria-label="breadcrumb"
      className="BreadCrumbContainer"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
