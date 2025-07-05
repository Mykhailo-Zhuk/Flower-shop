import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TabsData } from "../../Data/mainMenuData";
import "../../styles/Tabs.css";

const onChange = (key: string) => {
  console.log(key);
};

// Формуємо items для Antd Tabs на основі TabsData
const items: TabsProps["items"] = TabsData.map((tab, idx) => ({
  key: String(idx + 1),
  label: tab.tabTitle,
  children: (
    <div>
      {tab.sections.map((section, sIdx) => (
        <div key={sIdx} style={{ marginBottom: 16 }}>
          <h1 className="HeaderOfOpisRoseSun">
            <strong>{section.heading}</strong>
          </h1>
          <ul className="ListOfOpisRoseSun">
            {section.items.map((item, iIdx) => (
              <li key={iIdx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
}));

const App: React.FC = () => (
  <Tabs
    className="TabsTitleStyle"
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);

export default App;
