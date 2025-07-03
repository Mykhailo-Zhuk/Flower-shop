import React from "react";
import "../../styles/Carusel.css";

type RatingProps = {
  value: number; // кількість зірочок
  onChange?: (value: number) => void;
  readOnly?: boolean;
};

const Rating: React.FC<RatingProps> = ({ value, onChange, readOnly }) => {
  return (
    <div className="ratingContainer">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: readOnly ? "default" : "pointer",
              fontSize: "30px",
              color: star <= value ? "#ffa723" : "#666",
              transition: "color 0.2s",
            }}
            onClick={() => !readOnly && onChange && onChange(star)}
            title={`${star} зірок`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
