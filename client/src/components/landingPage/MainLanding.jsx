import React from 'react';
import FrontDeskLanding from '../frontDesk/FrontDeskLanding';
import LandingButtons from '../landingPage/MainLandingButtons';
import useChoosePath from '../landingPage/useChoosePath';
import HMLanding from '../maintenance/HMLanding';
import ManagementLanding from '../management/ManagementLanding';
import FlexCenterContainer from './FlexCenterContainer';
import TimeSheet from '../GlobalComponents/timeSheet/TimeSheetContainer';
import { MainProvider } from './MainContext';
import { useAuth0 } from '@auth0/auth0-react';

const MainLanding = ({ paths, setPaths }) => {
  const { user } = useAuth0();

  const routs = {
    frontDesk: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    housekeeping: [
      {
        title: 'Housekeeping',
        onClick: () => setPaths('hm'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    maintenance: [
      {
        title: 'Maintenance',
        onClick: () => setPaths('hm'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    management: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },
      { title: 'Housekeeping / Maintenance', onClick: () => setPaths('hm') },
      {
        title: 'Management',
        onClick: () => {
          setPaths('management');
        },
      },
      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    systemAdministration: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },
      { title: 'Housekeeping / Maintenance', onClick: () => setPaths('hm') },
      {
        title: 'Management',
        onClick: () => {
          setPaths('management');
        },
      },
      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
  };

  const clickBack = () => setPaths('landing');

  return (
    <MainProvider authUser={user}>
      {paths.frontDesk ? (
        <FrontDeskLanding back={clickBack} />
      ) : paths.hm ? (
        <HMLanding back={clickBack} />
      ) : paths.management ? (
        <ManagementLanding back={clickBack} />
      ) : paths.timeSheet ? (
        <TimeSheet back={clickBack} />
      ) : (
        <FlexCenterContainer marginTop='100px'>
          <LandingButtons routs={routs} />
        </FlexCenterContainer>
      )}
    </MainProvider>
  );
};

export default MainLanding;
