import React, { useState } from 'react';
import ListMaster from '../GlobalComponents/ListMaster';
import FlexCenterContainer from '../landingPage/FlexCenterContainer';
import EmployeeContainer from './employeeModal/EmployeeContainer';
import {
  sampleEmployee,
  timeSheetSample,
} from './employeeModal/sampleEmployeeData';

const ViewEmployeeList = ({ setBackColor, setListBackground }) => {
  const [toggleModals, setToggleModal] = useState(true);
  const [selectedData, setSelectedData] = useState(null);

  const openModal1 = (data) => {
    console.log(selectedData);
    setSelectedData(data);
    setBackColor('white');
    setListBackground(0);
    setToggleModal(false);
  };
  return (
    <div>
      {toggleModals ? (
        <ListMaster
          onClick1={openModal1}
          // onClick2={(data) => console.log(data)}
          type='employee'
          handleBackChange={setBackColor}
          handleBackgroundChange={setListBackground}
        />
      ) : (
        <FlexCenterContainer>
          <EmployeeContainer
            test={selectedData}
            employee={sampleEmployee}
            sampleData={timeSheetSample}
          />
        </FlexCenterContainer>
      )}
    </div>
  );
};

export default ViewEmployeeList;
