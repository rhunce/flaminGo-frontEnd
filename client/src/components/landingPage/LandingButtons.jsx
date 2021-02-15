import React from 'react';
import styled from 'styled-components';
import BigButton from '../styledElements/BigButton';

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPage = ({ routs }) => (
  <BtnContainer>
    {routs.map((rout) => (
      <BigButton margin={'27.5px 0'} onClick={rout.onClick}>
        {rout.title}
      </BigButton>
    ))}
  </BtnContainer>
);

export default LandingPage;
