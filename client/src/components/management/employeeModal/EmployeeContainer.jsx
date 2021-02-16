import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import EmployeeForm from './formInfoView/EmployeeForm';
import SummaryContainer from './workSummary/WorkSummaryContainer';
import { EmployeeProvider } from './EmployeeContext';

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

const EmployeeContainer = ({ employee, sampleData }) => (
  <EmployeeProvider employee={employee} sampleData={sampleData}>
    <HalfRoundDiv padding='40px' height='650px' width='975px'>
      <div>
        <FlexDiv>
          <EmployeeForm />
          <Bar />
          <SummaryContainer />
        </FlexDiv>
      </div>
    </HalfRoundDiv>
  </EmployeeProvider>
);

export default EmployeeContainer;
