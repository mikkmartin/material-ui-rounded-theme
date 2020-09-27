import * as React from "react";
import "./styles.css";
import { Select, Option } from "../components/Select";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="App">
      <Select value={value} onChange={(ev) => setValue(ev.target.value)}>
        <Option disabled value="">
          Select shipping...
        </Option>
        {options.map(({ name, price }, i) => (
          <Option key={i} value={i}>
            <span>{name}</span>
            <span>{price}</span>
          </Option>
        ))}
      </Select>
    </div>
  );
}

const options = [
  { name: "Tähitud postiga", price: "€2.95" },
  { name: "Omniva pakiautomaat (Eesti)", price: "€2.95" },
  { name: "Järele tulemisega", price: "€0" },
  { name: "International", price: "€12" },
  { name: "European", price: "€8" },
  { name: "Itella pakiautomaat (Soome)", price: "€8" },
  { name: "Omniva pakiautomaat (Läti)", price: "€8" },
  { name: "Omniva pakiautomaat (Leedu)", price: "€8" }
];
