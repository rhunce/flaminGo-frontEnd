import styled from 'styled-components';
import React from 'react';
import { colors } from './styleGuid';

const XBtn = styled.button`
  color: ${colors.black};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border: none;
  background-color: white;
  right: ${(props) => (props.right ? props.right : '0')};
  position: absolute;
`;

const XButton = ({ margin, onClick }) => (
  <XBtn onClick={onClick}>
    <svg
      width='30'
      height='30'
      fill='currentColor'
      class='bi bi-x'
      viewBox='0 0 16 16'
    >
      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
    </svg>
  </XBtn>
);

export default XButton;
