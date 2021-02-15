import React from 'react';
import styled from 'styled-components';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';

// flex container
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FrontDeskLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    checkIn: false,
    checkOut: false,
    viewRooms: false,
    landing: true,
  });

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    {
      title: 'Check-In',
      onClick: () => setPaths('checkIn'),
    },
    { title: 'Check-Out', onClick: () => setPaths('checkOut') },
    { title: 'View Rooms', onClick: () => setPaths('viewRooms') },
  ];

  // return to main landing
  const clickBack = () => {
    // if on landing run back function else return to this landing
    paths.landing ? back() : setPaths('landing');
  };

  return (
    <div>
      <BackArrow margin={'40px 40px'} onClick={clickBack} />
      {paths.checkIn ? (
        // place holder for check-in component
        <div>place holder for check-in component</div>
      ) : paths.checkOut ? (
        // place holder for check-out component
        <div>place holder for check-out component</div>
      ) : paths.viewRooms ? (
        // place holder for room view component
        <div>place holder for room view component</div>
      ) : (
        <BtnContainer>
          <LandingButtons routs={routs} />
        </BtnContainer>
      )}
    </div>
  );
};

export default FrontDeskLanding;
