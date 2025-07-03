import { Link as RouterLink, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "../../styles/BreadCrumb.css";

const PATH_NAMES: Record<string, string> = {
  "": "/public/ЕлементиЧайно-гібридніТроянди/10.png",
  "catalog-of-roses": "Каталог троянд",
  "catalog-england-rose": "Англійські троянди",
  "catalog-tea-hybride-rose": "Чайно-гібридні троянди",
  "catalog-borders-rose": "Бордюрні троянди",
};

function renderBreadcrumbContent(value: string) {
  const label = PATH_NAMES[value] || value;
  if (
    typeof label === "string" &&
    (label.endsWith(".png") || label.endsWith(".jpg") || label.endsWith(".svg"))
  ) {
    return (
      <img
        src={label}
        alt={value}
        style={{ width: 24, height: 24, verticalAlign: "middle" }}
      />
    );
  }
  return label;
}

export default function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const current = pathnames[pathnames.length - 1] || "";

  return (
    <Breadcrumbs
      separator={<span style={{ fontSize: 28, color: "#000" }}>/</span>}
      aria-label="breadcrumb"
      className="BreadCrumbContainer"
    >
      <Link
        component={RouterLink}
        className="LinksStyles"
        underline="hover"
        color="inherit"
        to="/"
      >
        {renderBreadcrumbContent("")}
      </Link>
      {current && (
        <Typography>
          <h1 className="LinksStyles"> {renderBreadcrumbContent(current)}</h1>
        </Typography>
      )}
    </Breadcrumbs>
  );
}
