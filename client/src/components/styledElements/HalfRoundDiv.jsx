import React from 'react';
import styled from 'styled-components';
import { colors, font, gradient } from './styleGuid';

const HalfRound = styled.section`
  color: ${(props) => (props.gradient ? colors.white : colors.black)};
  font-family: ${font.mainFont};
  background-color: ${colors.white};
  background-image: ${(props) =>
    props.gradient ? gradient.carrotToBerry : 'none'};
  border-radius: 0px 30px 0px 30px;
  width: ${(props) => (props.width ? props.width : '900px')};
  height: ${(props) => (props.height ? props.height : '600px')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

const HalfRoundDiv = ({
  children,
  margin,
  padding,
  gradient,
  className,
  id,
  height,
  width,
}) => (
  <HalfRound
    width={width}
    height={height}
    id={id}
    margin={margin}
    padding={padding}
    className={className}
    gradient={gradient}
  >
    {children}
  </HalfRound>
);

export default HalfRoundDiv;
