import * as React from "react";
import { FC } from "react";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { StylesProvider } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import styled, { createGlobalStyle, useTheme } from "styled-components";

type Value = number | string;
type SelectProps = {
  value?: Value;
  onChange?: (ev: any) => void;
  fullWidth?: boolean;
};

export type Theme = {
  dark?: boolean;
};

export const Select: FC<SelectProps> = ({
  children,
  value,
  onChange,
  fullWidth
}) => {
  const theme = useTheme();
  console.log(theme);

  return (
    <StylesProvider injectFirst>
      <StyledFormControl fullWidth={fullWidth}>
        <GlobalStyles />
        <MuiSelect
          value={value}
          onChange={onChange}
          displayEmpty
          IconComponent={(props) => <Chevron {...props} />}
          input={<StyledInput />}
          MenuProps={{
            anchorOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            anchorReference: "anchorEl"
          }}
        >
          {children}
        </MuiSelect>
      </StyledFormControl>
    </StylesProvider>
  );
};

type OptionProps = {
  value?: Value;
  disabled?: boolean;
};

const StyledInput = styled(InputBase)`
  .MuiSelect-root {
    font-family: "Manrope";
    letter-spacing: 1px;
    box-sizing: border-box;
    height: 54px;
    text-align: left;
    padding: 16px;
    padding-right: 54px;
    border: 2px solid transparent;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
    > span {
      text-overflow: ellipsis;
      overflow: hidden;
      flex-shrink: 1;
      line-height: 100%;
      &:last-child {
        flex-shrink: 0;
      }
    }
    background: ${({ theme }) =>
      theme.dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
    color: ${({ value, theme }) =>
      theme.dark
        ? value === ""
          ? "rgba(255, 255, 255, 0.35)"
          : "rgba(255, 255, 255, 1)"
        : value === ""
        ? "rgba(0, 0, 0, 0.35)"
        : "rgba(0, 0, 0, 1)"};
    &:hover {
      background: ${({ theme }) =>
        theme.dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"};
    }
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid white;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.65);
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
  min-height: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: 0s;
`;

export const Option: FC<OptionProps> = ({ children, ...props }) => {
  return <StyledItem {...props}>{children}</StyledItem>;
};

const StyledFormControl = styled(FormControl)``;
const SvgContainer = styled.svg`
  position: absolute;
  right: 4px;
  height: 100%;
  width: 40px;
  top: 0;
  #line {
    stroke: ${(props) =>
      props.theme?.dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }
  #chevron {
    stroke: ${(props) => (props.theme?.dark ? "white" : "black")};
  }
  &.MuiSelect-iconOpen {
    transform: scaleY(-1);
  }
`;

const Chevron: FC = (props) => {
  return (
    <SvgContainer {...props} width="44" height="34" viewBox="0 0 44 34">
      <path
        id="line"
        d="M 0.5 0.5 L 0.5 33.5"
        fill="transparent"
        strokeLinecap="square"
      />
      <path
        id="chevron"
        d="M 16 14 L 22 20 L 28 14"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      />
    </SvgContainer>
  );
};

const GlobalStyles = createGlobalStyle`
  .MuiMenu-paper {
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(40px);
    box-shadow: 0 10px 60px -5px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.21);
    color: white;
  }
`;
