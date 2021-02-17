import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const DropDown = styled.select`
  font-family: ${fonts.mainFont};
  font-weight: ${fonts.plain};
  font-size: 16px;
  color: ${colors.black};
  border: ${(props) =>
    props.border ? props.border : `1px solid ${colors.berry}`};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 4px;
  padding: 5px 20px 5px 20px;
  width: ${(props) => props.width && props.width};
`;

export default DropDown;
