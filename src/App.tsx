import * as React from "react";
import "./styles.css";
import { Select, Option } from "../components/Select";
import { options, pickupLocations } from "./data";
import { ThemeProvider } from "styled-components";

const Inputs = () => {
  const [shipping, setShipping] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [amount, setAmount] = React.useState(1);

  return (
    <>
      <Select
        fullWidth
        value={shipping}
        onChange={(ev) => setShipping(ev.target.value)}
      >
        <Option disabled value="">
          Select delivery...
        </Option>
        {options.map(({ name, price }, i) => (
          <Option key={i} value={i}>
            <span>{name}</span>
            <span>{price}</span>
          </Option>
        ))}
      </Select>
      {!!shipping && (
        <Select
          fullWidth
          value={pickup}
          onChange={(ev) => setPickup(ev.target.value)}
        >
          <Option disabled value="">
            Select pickup location...
          </Option>
          {pickupLocations.map((name, i) => (
            <Option key={i} value={i}>
              {name}
            </Option>
          ))}
        </Select>
      )}
      {amount !== 0 && (
        <Select value={amount} onChange={(ev) => setAmount(ev.target.value)}>
          <Option value={0}>remove</Option>
          {options.map(({ name, price }, i) => (
            <Option key={i} value={i + 1}>
              {i + 1}
            </Option>
          ))}
        </Select>
      )}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Light</h1>
        <Inputs />
      </div>
      <ThemeProvider theme={{ dark: true }}>
        <div className="dark">
          <h1>Dark</h1>
          <Inputs />
        </div>
      </ThemeProvider>
    </div>
  );
}
