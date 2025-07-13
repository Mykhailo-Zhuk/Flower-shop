import { useState } from "react";
import { roseData } from "../../Data/mainMenuData";
import "../../styles/readMore.css";
import RoseCard from "../ReadMore/RoseCard";
// import { roseData } from "./data/roseData";

const ReadMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="readMore">
      {/* <hr style={{ background: "#4d7c5b" }} /> */}
      {!showMore && (
        <button className="readMoreBtn" onClick={() => setShowMore(true)}>
          Читати повністю{" "}
          <img
            src="/public/ЕлементиЧайно-гібридніТроянди/77.png"
            height={"auto"}
            alt=""
          />
        </button>
      )}
      {showMore && (
        <div className="readMoreContent">
          <button
            className="closeReadMore"
            onClick={() => setShowMore(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "none",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
            }}
            aria-label="Закрити"
          >
            ×
          </button>
          <div style={{ marginTop: 30 }}>
            <h1 className="rose-title">Опис</h1>

            <p className="rose-paragraph-after-title">
              <strong> Троянда «Сонечко» </strong> – це{" "}
              <strong>чудовий сорт чайногібридної троянди, </strong>що зачаровує
              <strong>
                великими густомахровими квітами насиченого жовтого кольору,
              </strong>{" "}
              які нагадують сонячні промені. Вона стане{" "}
              <strong>
                {" "}
                центром уваги у саду завдяки яскравому забарвленню,
                довготривалому цвітінню і витонченому аромату. Висока стійкість
                до хвороб і морозостійкість
              </strong>
              роблять цю троянду чудовим вибором для будь-якої ділянки.
            </p>
            <RoseCard rose={roseData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
