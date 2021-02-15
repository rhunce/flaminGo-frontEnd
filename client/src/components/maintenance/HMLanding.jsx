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

const HMLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    addTask: false,
    viewTask: false,
    viewRooms: false,
    landing: true,
  });

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    { title: 'Add Task', onClick: () => setPaths('addTask') },
    {
      title: 'View Task',
      onClick: () => setPaths('viewTask'),
    },
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
      {paths.viewTask ? (
        // place holder for task view component
        <div>place holder for task view component</div>
      ) : paths.viewRooms ? (
        // place holder for room view component
        <div>place holder for room view component</div>
      ) : paths.addTask ? (
        // place holder for add task component
        <div>place holder for add task component</div>
      ) : (
        <BtnContainer>
          <LandingButtons routs={routs} />
        </BtnContainer>
      )}
    </div>
  );
};

export default HMLanding;
