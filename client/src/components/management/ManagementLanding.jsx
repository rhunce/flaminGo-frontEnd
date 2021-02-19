import React, { useState } from 'react';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';
import FlexCenterContainer from '../landingPage/FlexCenterContainer';
import ViewEmployeeList from './viewEmployeeList';
import ViewAddEditRoom from './ViewAddEditRoom.jsx';

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
          <ViewEmployeeList
            setBackColor={setBackColor}
            setListBackground={setListBackground}
          />
        ) : paths.viewRooms ? (
          // room view component
          <ViewAddEditRoom
            setBackColor={setBackColor}
            setListBackground={setListBackground}
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
