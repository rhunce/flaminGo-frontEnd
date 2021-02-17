import styled from 'styled-components';

const FlexCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  height: 100%;
  position: absolute; */
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export default FlexCenterContainer;
