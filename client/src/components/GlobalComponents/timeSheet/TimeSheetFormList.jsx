import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import FormRow from '../../management/employeeModal/formInfoView/FormRow';
import FormButton from '../../styledElements/FormButton';
import timeSheetTemplate from './timeSheetTemplate';
import useTimeSheet from './useTimeSheet';
import { MainContext } from '../../landingPage/MainContext';
import axios from 'axios';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Spacer = styled.div`
  width: 1px;
  height: 25px;
`;

const Centered = styled.div`
  position: absolute;

  left: 50%;
  transform: translate(-50%);
`;

const TimeSheetFormList = ({ selectedWeek, back }) => {
  const { id } = useContext(MainContext);

  const [editMode, setEditMode] = useState(selectedWeek ? false : true);
  const [timeSheet, setTimeSheet] = useTimeSheet({
    userId: !selectedWeek ? id : null,
    initialState: selectedWeek,
  });

  const submit = (e) => {
    axios
      .put(`/timesheets`, timeSheet)
      .then(() => {
        console.log('yay');
        back();
      })
      .catch((err) => {
        console.error(err);
        console.log(timeSheet);
        back();
      });
  };

  return (
    <Centered>
      <FlexContainer>
        {timeSheetTemplate.map((day) => {
          return (
            <FlexContainer>
              <FormRow
                label={day.name}
                editMode={editMode}
                key={day.name + day.day}
                name={day.day}
                value={timeSheet[day.day]}
                onChange={(e) => {
                  setTimeSheet((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
              <Spacer />
            </FlexContainer>
          );
        })}
        <FormButton onClick={submit} margin='15px' backgroundColor={'berry'}>
          Submit
        </FormButton>
      </FlexContainer>
    </Centered>
  );
};

export default TimeSheetFormList;
// {
//   "timesheet_id": "60108729ffefc9bae1075652",
//   "employee_id": "60108729ffefc9bae1075651",
//   "monday": 8,
//   "tuesday": 7,
//   "wednesday": 8,
//   "thursday": 5,
//   "friday": 9,
//   "saturday": 0,
//   "sunday": 0,
//   "weekStart": "2021-02-08",
//   "weekEnd": "2021-02-14"
// }
