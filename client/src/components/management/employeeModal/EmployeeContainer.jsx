import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import EmployeeForm from './formInfoView/EmployeeForm';
import SummeryContainer from './workSummery/WorkSummeryContainer';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Bar = styled.div`
  height: 570px;
  width: 2px;
  background-color: ${colors.berry};
  margin-left: 40px;
  margin-right: 40px;
`;

const EmployeeContainer = ({ employee = {}, newEmployee }) => (
  <div>
    <HalfRoundDiv padding='40px' height='650px' width='975px'>
      <div>
        <FlexDiv>
          <EmployeeForm employee={employee} newEmployee={newEmployee} />
          <Bar />
          <SummeryContainer />
        </FlexDiv>
      </div>
    </HalfRoundDiv>
  </div>
);

export default EmployeeContainer;
