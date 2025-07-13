import React from "react";
// import { Rose } from "../../Data/mainMenuData";
import "../../styles/readMore.css";

interface Props {
  rose: Rose;
}

type Rose = {
  name: string;
  type: string;
  height: string;
  color: string;
  flowerSize: string;
  flowering: string;
  aroma: string;
  diseaseResistance: string;
  frostResistance: string;
  location: string;
  soil: string;
  care: {
    planting: string;
    watering: string;
    pruning: string;
    fertilizing: string;
    winterCare: string;
  };
  storeLink: string;
};

const RoseCard: React.FC<Props> = ({ rose }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
      <h1 className="text-2xl font-bold text-yellow-700 mb-2">{rose.name}</h1>
      {/* <p className="text-gray-700 mb-4">{rose.type}</p> */}
      <h2 className="BaseCharacteristics ">
        <img src="/public/ЕлементиОписТроянди/20.png" alt="" />
        Основні Характеристики
      </h2>
      <ul className="text-sm li-green- text-gray-800 space-y-1">
        <li>
          <strong>Тип:</strong> {rose.type}
        </li>
        <li>
          <strong>Висота:</strong> {rose.height}
        </li>
        <li>
          <strong>Колір квітки:</strong> {rose.color}
        </li>
        <li>
          <strong>Розмір квітки:</strong> {rose.flowerSize}
        </li>
        <li>
          <strong>Тип цвітіння:</strong> {rose.flowering}
        </li>
        <li>
          <strong>Аромат:</strong> {rose.aroma}
        </li>
        <li>
          <strong>Стійкість до хвороб:</strong> {rose.diseaseResistance}
        </li>
        <li>
          <strong>Морозостійкість:</strong> {rose.frostResistance}
        </li>
        <li>
          <strong>Місце посадки:</strong> {rose.location}
        </li>
        <li>
          <strong>Ґрунт:</strong> {rose.soil}
        </li>
      </ul>

      <h2 className="mt-6 text-lg font-semibold text-yellow-600">Догляд</h2>
      <ul className="text-sm no-li text-gray-700 list-disc pl-5 space-y-1">
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/public/ЕлементиОписТроянди/24.png" alt="" />{" "}
          <strong>Посадка:</strong> {rose.care.planting}
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/public/ЕлементиОписТроянди/25.png" alt="" />{" "}
          <strong>Полив:</strong> {rose.care.watering}
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/public/ЕлементиОписТроянди/26.png" alt="" />{" "}
          <strong>Обрізка:</strong> {rose.care.pruning}
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/public/ЕлементиОписТроянди/27.png" alt="" />{" "}
          <strong>Підживлення:</strong> {rose.care.fertilizing}
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/public/ЕлементиОписТроянди/28.png" alt="" />{" "}
          <strong>Підготовка до зими:</strong> {rose.care.winterCare}
        </li>
      </ul>

      <a
        href={rose.storeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
      >
        Купити в Alyona’s Garden
      </a>
    </div>
  );
};

export default RoseCard;
