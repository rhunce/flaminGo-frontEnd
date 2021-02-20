import React from 'react';

// styled Component
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import Title from '../../styledElements/ModalTitle';
import FlexCenterContainer from '../../styledElements/FlexCenterContainer';

// React Components that have real functionality
import TimeSheetFormList from './TimeSheetFormList';
import BackArrow from '../../styledElements/BackArrow';

/**
 * This is the main container for the time sheet widget. Only the BackArrow and TimeSheetFormList
 * @param {Function} back - This is the function that allows the user to close this form passed as props from the main landing
 */
const TimeSheetContainer = ({ back }) => (
  <div>
    <BackArrow margin={'40px 40px'} onClick={back} location={'Main Homepage'} />
    <FlexCenterContainer>
      <HalfRoundDiv width='450px' height='730px'>
        <Title>Time Sheet</Title>
        <TimeSheetFormList back={back} />
      </HalfRoundDiv>
    </FlexCenterContainer>
  </div>
);

export default TimeSheetContainer;
