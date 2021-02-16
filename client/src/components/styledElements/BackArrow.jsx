import React from 'react';
import styled from 'styled-components';
import { colors } from './styleGuid';
import ToolTip from './ToolTip';

const Button = styled.button`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? colors[props.color] : colors.white)};
  background: none;
  padding: 0;
  border: none;
  height: 40px;
  position: relative;

  &:hover ${ToolTip} {
    visibility: visible;
  }
`;

/**
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {Function} onClick - the onClick functionality
 * @param {String} color - set font color - default is white
 */
const BackArrow = ({ margin, color, onClick, location }) => (
  <Button margin={margin} color={color} onClick={onClick}>
    <svg width='40' height='40' fill='currentColor' viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
      />
    </svg>
    <ToolTip>{`To ${location}`}</ToolTip>
  </Button>
);

export default BackArrow;
/**
 * <style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip *
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
<body style="text-align:center;">

<p>Move the mouse over the text below:</p>

<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

<p>Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to position the tooltip in a desirable way.</p>

</body>
</html>

 */
