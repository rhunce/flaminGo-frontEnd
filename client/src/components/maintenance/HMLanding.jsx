import React, { useState } from 'react';
import styled from 'styled-components';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';
import ListMaster from '../GlobalComponents/ListMaster'

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

    //set up for transition to room list page
    const [backColor, setBackColor] = useState("white");
    const [listBackground, setListBackground] = useState(0)

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
    setBackColor("white");
    setListBackground(0)
  };

  return (
    <div className="landingContainer">
      <div className={listBackground}>
      <BackArrow margin={'40px 40px'} onClick={clickBack} color={backColor}/>
      {paths.viewTask ? (
        // place holder for task view component
        <ListMaster type="task" handleBackChange={setBackColor} handleBackgroundChange={setListBackground}/>
      ) : paths.viewRooms ? (
        // place holder for room view component
        <ListMaster type="room" handleBackChange={setBackColor} handleBackgroundChange={setListBackground}/>
      ) : paths.addTask ? (
        // place holder for add task component
        <div>place holder for add task component</div>
      ) : (
        <BtnContainer>
          <LandingButtons routs={routs} />
        </BtnContainer>
      )}
      </div>
    </div>
  );
};

export default HMLanding;
