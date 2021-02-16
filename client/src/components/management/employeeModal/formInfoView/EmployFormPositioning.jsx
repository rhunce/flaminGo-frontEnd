import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
<<<<<<< HEAD
  margin-top: 10px;
=======
  margin: ${(props) => (props.margin ? props.margin : '10px 0px 0px 0px')};
>>>>>>> dev
  width: 328px;
`;

export const FormLabel = styled.label`
<<<<<<< HEAD
  margin-right: 15px;
=======
  margin: 15px;
>>>>>>> dev
`;
