import React, { useState } from 'react';
import styled from 'styled-components';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';
import ListMaster from '../GlobalComponents/ListMaster';
import FlexCenterContainer from '../landingPage/FlexCenterContainer';
import EmployeeContainer from './employeeModal/EmployeeContainer';
import AddEditRooms from './roomModal/AddEditRooms.jsx';

import {
  sampleEmployee,
  timeSheetSample,
} from './employeeModal/sampleEmployeeData';

// flex container

const ManagementLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    viewEmployees: false,
    viewRooms: false,
    guestList: false,
    landing: true,
  });

  //set up for transition to room list page
  const [backColor, setBackColor] = useState('white');
  const [listBackground, setListBackground] = useState(0);

  // static object of this Landing routs and flipping for conditional rendering
  const routs = [
    { title: 'Guest List', onClick: () => setPaths('guestList') },
    {
      title: 'View Employees',
      onClick: () => setPaths('viewEmployees'),
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
          location={paths.landing ? 'Main Homepage' : 'Management'}
        />
        {paths.viewEmployees ? (
          // place holder for employee view component
          <ListMaster
            onClick1={(e) => console.log(e)}
            onClick2={(e) => console.log('working2')}
            type='employee'
            handleBackChange={setBackColor}
            handleBackgroundChange={setListBackground}
          />
        ) : // <FlexCenterContainer>
        //   <EmployeeContainer
        //     employee={sampleEmployee}
        //     sampleData={timeSheetSample}
        //   />
        // </FlexCenterContainer>
        paths.viewRooms ? (
          // place holder for room view component
          <AddEditRooms
            type='ADD'
            onClick1={(e) => console.log(e)}
            onClick2={(e) => console.log('working2')}
            handleBackChange={setBackColor}
            handleBackgroundChange={setListBackground}
          />
        ) : paths.guestList ? (
          // place holder for Guest List component
          <ListMaster
            type='guest'
            handleBackChange={setBackColor}
            handleBackgroundChange={setListBackground}
          />
        ) : (
          <FlexCenterContainer>
            <LandingButtons routs={routs} />
          </FlexCenterContainer>
        )}
      </div>
    </div>
  );
};

export default ManagementLanding;
