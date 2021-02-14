import React from 'react';
import styled from 'styled-components';
import LandingButtons from '../landingPage/LandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import BackArrow from '../styledElements/BackArrow';
import EmployeeContainer from './employeeModal/EmployeeContainer';

// flex container
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ManagementLanding = ({ back }) => {
  // set state to toggle for conditional rendering
  const [paths, setPaths] = useChoosePath({
    viewEmployees: false,
    viewRooms: false,
    guestList: false,
    landing: true,
  });

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
  };

  return (
    <div>
      <BackArrow margin={'40px 40px'} onClick={clickBack} />
      {paths.viewEmployees ? (
        // place holder for employee view component
        <EmployeeContainer />
      ) : paths.viewRooms ? (
        // place holder for room view component
        <div>place holder for room view component</div>
      ) : paths.guestList ? (
        // place holder for Guest List component
        <div>place holder for Guest List component</div>
      ) : (
        <BtnContainer>
          <LandingButtons routs={routs} />
        </BtnContainer>
      )}
    </div>
  );
};

export default ManagementLanding;
