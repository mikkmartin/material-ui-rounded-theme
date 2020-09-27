import * as React from "react";
import { FC } from "react";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { StylesProvider } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import styled, { createGlobalStyle } from "styled-components";

const StyledInput = styled(InputBase)`
  .MuiSelect-root {
    font-family: "Manrope";
    letter-spacing: 1px;
    box-sizing: border-box;
    background: orange;
    height: 54px;
    text-align: left;
    padding: 16px;
    padding-right: 54px;
    background: rgba(0, 0, 0, 0.04);
    border: 2px solid transparent;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
    > span {
      text-overflow: ellipsis;
      overflow: hidden;
      flex-shrink: 1;
      &:last-child {
        flex-shrink: 0;
      }
    }
    color: ${(props) =>
      props.value === "" ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 1)"};
    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
    &:focus {
      background: transparent;
      border: 2px solid #005fff;
    }
  }
  .MuiSelect-root,
  .MuiSelect-root:focus {
    border-radius: 12px;
  }
`;

const StyledItem = styled(MenuItem)`
  font-family: "Manrope";
  letter-spacing: 1px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: 0s;
  /*
  &.Mui-selected {
    background: #eaf3fc77;
    color: #005fff;
  }
  &.Mui-focusVisible {
    background: #005fff;
    color: white;
  }
  */
`;

const StyledFormControl = styled(FormControl)``;
const SvgContainer = styled.svg`
  position: absolute;
  right: 4px;
  height: 100%;
  width: 40px;
  top: 0;
  &.MuiSelect-iconOpen {
    transform: scaleY(-1);
  }
`;

const Chevron: FC = (props) => {
  return (
    <SvgContainer {...props} width="44" height="34" viewBox="0 0 44 34">
      <path
        d="M 0.5 0.5 L 0.5 33.5"
        fill="transparent"
        stroke="rgba(0, 0, 0, 0.1)"
        strokeLinecap="square"
      ></path>

      <path
        d="M 16 14 L 22 20 L 28 14"
        fill="transparent"
        strokeWidth="1.5"
        stroke="rgb(0,0,0)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </SvgContainer>
  );
};

const GlobalStyles = createGlobalStyle`
  .MuiMenu-paper {
    box-sizing: border-box;
    background: rgba(220, 220, 220, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(40px);
    transform-origin: unset !important;
    margin-left: 2px;
    box-shadow: 0 10px 60px -5px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.21);
  }
`;

export function Select() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <StylesProvider injectFirst>
        <StyledFormControl fullWidth>
          <GlobalStyles />
          <MuiSelect
            value={age}
            onChange={handleChange}
            displayEmpty
            IconComponent={(props) => <Chevron {...props} />}
            input={<StyledInput />}
          >
            <StyledItem value="" disabled>
              Select shipping...
            </StyledItem>
            <StyledItem value={10}>
              <span>Smart post postiautomaat </span>
              <span>3.99€</span>
            </StyledItem>
            <StyledItem value={20}>Twenty</StyledItem>
            <StyledItem value={30}>Thirty</StyledItem>
          </MuiSelect>
        </StyledFormControl>
      </StylesProvider>
    </div>
  );
}
