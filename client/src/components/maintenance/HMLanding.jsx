import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';
import ListMaster from '../GlobalComponents/ListMaster'
import AddTaskForm from './AddTaskForm.jsx';
import FlexCenterContainer from '../landingPage/FlexCenterContainer';
import ViewAddEditRoom from '../management/ViewAddEditRoom.jsx';
import {MainContext} from '../landingPage/MainContext.jsx';

// flex container

const HMLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    addTask: false,
    viewTask: false,
    viewRooms: false,
    landing: true,
  });

  const {id} = useContext(MainContext);

  //set up for transition to room list page
  const [backColor, setBackColor] = useState('white');
  const [listBackground, setListBackground] = useState(0);

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
    setBackColor('white');
    setListBackground(0);
  };

  return (
    <div className='landingContainer'>
      <div className={listBackground}>
        <BackArrow
          margin={'40px 40px'}
          onClick={clickBack}
          color={backColor}
          location={
            paths.landing ? 'Main Homepage' : 'Housekeeping/Maintenance'
          }
        />
        {paths.viewTask ? (
          // place holder for task view component
          <ListMaster
            type='task'
            handleBackChange={setBackColor}
            handleBackgroundChange={setListBackground}
          />
        ) : paths.viewRooms ? (
          // place holder for room view component
          <ViewAddEditRoom
          setBackColor={setBackColor}
          setListBackground={setListBackground}
        />
        ) : paths.addTask ? (
          // place holder for add task component
          <FlexCenterContainer>
            <AddTaskForm employeeId={id}/>
          </FlexCenterContainer>
        ) : (
          <FlexCenterContainer>
            <LandingButtons routs={routs} />
          </FlexCenterContainer>
        )}
      </div>
    </div>
  );
};

export default HMLanding;
