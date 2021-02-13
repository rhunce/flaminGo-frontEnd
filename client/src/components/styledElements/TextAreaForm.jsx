import React from 'react';
import styled from 'styled-components';
import { colors, font } from './styleGuid';

const FormInput = styled.textarea`
  color: ${colors.black};
  font-family: ${font.mainFont};
  font-size: 16px;
  border: 1px solid ${colors.berry};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 4px;
  padding: 15px 20px 15px 20px;
  width: ${(props) => props.width && props.width};
  resize: none;
`;

const TextArea = ({
  placeholder,
  name,
  onChange,
  value,
  defaultValue,
  autocomplete = 'off',
  margin,
  className,
  disabled = false,
  width,
  wrap,
  maxlength,
  rows,
  id,
}) => (
  <FormInput
    id={id}
    rows={rows}
    maxlength={maxlength}
    placeholder={placeholder}
    name={name}
    margin={margin}
    onChange={onChange}
    disabled={disabled}
    autocomplete={autocomplete}
    className={className}
    autocomplete={autocomplete}
    value={value}
    defaultValue={defaultValue}
    width={width}
    wrap={wrap}
  />
);
export default TextArea;
