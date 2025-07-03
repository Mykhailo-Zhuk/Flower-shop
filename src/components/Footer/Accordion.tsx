import Accordion from "@mui/material/Accordion";
import "../../styles/footer.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "#B8CCAE",

          border: "none",
          borderRadius: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 55 }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            style={{
              fontSize: "25px",
              color: "#245E2C",
              textTransform: "uppercase",
            }}
            component="span"
          >
            Інформація
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam id
          facilis, commodi voluptate deserunt, ipsum quisquam animi sequi sint
          esse, atque quam. Corporis repellendus facere rem ex velit excepturi,
          cumque dolorem odio saepe. Molestiae, incidunt.
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "#B8CCAE",

          border: "none",
          borderRadius: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 55 }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{
              fontSize: "25px",
              color: "#245E2C",
              textTransform: "uppercase",
            }}
          >
            Популярне
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "#B8CCAE",

          border: "none",
          borderRadius: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 55 }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{
              fontSize: "25px",
              color: "#245E2C",
              textTransform: "uppercase",
            }}
          >
            Контакти та адреса
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "#B8CCAE",

          border: "none",
          borderRadius: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: 55 }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            style={{
              fontSize: "25px",
              color: "#245E2C",
              textTransform: "uppercase",
            }}
            component="span"
          >
            Написати нам
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam id
          facilis, commodi voluptate deserunt, ipsum quisquam animi sequi sint
          esse, atque quam. Corporis repellendus facere rem ex velit excepturi,
          cumque dolorem odio saepe. Molestiae, incidunt.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
