import React from 'react';
import styled from 'styled-components';
import { colors, font } from './styleGuid';

const Button = styled.button`
  font-family: ${font.mainFont};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  background-color: ${(props) =>
    props.color ? props.color : colors.clementine};
  border: none;
  border-radius: 20px;
  width: 160px;
  height: 40px;
  outline: none;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  &:active {
    background-color: ${(props) =>
      props.color ? colors.grape : colors.carrot};
  }
`;

const FormButton = ({
  children,
  onClick,
  color,
  margin,
  type,
  disabled = false,
  className,
  id,
}) => (
  <Button
    id={id}
    type={type}
    margin={margin}
    color={color}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </Button>
);

export default FormButton;
