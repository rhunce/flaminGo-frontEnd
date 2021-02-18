import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import EmployeeForm from './formInfoView/EmployeeForm';
import SummaryContainer from './workSummary/WorkSummaryContainer';
import { EmployeeProvider } from './EmployeeContext';
import XButton from '../../styledElements/Xbutton';

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

const EmployeeContainer = ({ employee, back }) => {
  return (
    <EmployeeProvider
      employee={employee}
      sampleId={'auth0|602c2317c8851c0069021c2c'}
    >
      <HalfRoundDiv padding='40px' height='650px' width='975px'>
        <div style={{ position: 'relative' }}>
          <XButton onClick={back} />
          <FlexDiv>
            <EmployeeForm />
            <Bar />
            <SummaryContainer />
          </FlexDiv>
        </div>
      </HalfRoundDiv>
    </EmployeeProvider>
  );
};

export default EmployeeContainer;
