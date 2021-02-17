import React from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import Title from '../../styledElements/ModalTitle';
import TimeSheetFormList from './TimeSheetFormList';
import BackArrow from '../../styledElements/BackArrow';
import FlexCenterContainer from '../../landingPage/FlexCenterContainer';

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
