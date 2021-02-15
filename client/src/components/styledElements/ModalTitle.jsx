import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

/**
 * Styled H3 for Modals
 * @param {String} colors - set font color - default is berry
 * @param {String} margin - set the margins for the element - default is html default (1em top and bottom)
 */
const ModalTitle = styled.h3`
  font-family: ${fonts.mainFont};
  font-size: 36px;
  font-weight: ${fonts.bold};
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  margin: ${(props) => props.margin && props.margin};
`;

export default ModalTitle;
