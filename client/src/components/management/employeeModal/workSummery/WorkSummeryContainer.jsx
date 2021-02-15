import React from 'react';
import styled from 'styled-components';
import ModalTitle from '../../../styledElements/ModalTitle';
import WorkSummeryList from './WorkSummeryList';

const Holder = styled.section`
  display: flex;
  justify-content: center;
  flex-grow: 3;
  height: 640px;
  flex-direction: column;
`;

const SummeryContainer = () => (
  <Holder>
    <ModalTitle margin='0px 0px 0px 0px'>Work Summary</ModalTitle>
    <WorkSummeryList />
  </Holder>
);

export default SummeryContainer;
