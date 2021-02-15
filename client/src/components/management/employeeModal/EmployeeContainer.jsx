import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import EmployeeForm from './EmployeeForm';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Bar = styled.div`
  height: 590px;
  width: 2px;
  background-color: ${colors.berry};
  ma
`;

const EmployeeContainer = ({ employee = {}, newEmployee }) => (
  <div>
    <HalfRoundDiv padding='30px' height='650px' width='975px'>
      <div>
        <FlexDiv>
          <EmployeeForm employee={employee} newEmployee={newEmployee} />
          <Bar />
        </FlexDiv>
      </div>
    </HalfRoundDiv>
  </div>
);

export default EmployeeContainer;
