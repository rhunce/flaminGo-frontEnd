import React from 'react';
import styled from 'styled-components';
import { colors, font } from './styleGuid';

const Button = styled.button`
  font-family: ${font.mainFont};
  font-size: 36px;
  font-weight: bolder;
  color: ${(props) => (props.color ? props.color : colors.berry)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  border: none;
  border-radius: 50px;
  width: 647px;
  height: 110px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

const MainButton = ({
  children,
  onClick,
  backgroundColor,
  color,
  margin,
  type,
  disabled = false,
  classes,
  id,
}) => (
  <Button
    id={id}
    margin={margin}
    backgroundColor={backgroundColor}
    color={color}
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={classes}
  >
    {children}
  </Button>
);

export default MainButton;
