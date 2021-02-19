import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import FormRow from '../../management/employeeModal/formInfoView/FormRow';
import FormButton from '../../styledElements/FormButton';
import timeSheetTemplate from './timeSheetTemplate';
import useTimeSheet from './useTimeSheet';
import { MainContext } from '../../landingPage/MainContext';
import axios from 'axios';
import url from '../../../lib/apiPath';

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
  const [timeSheet, setTimeSheet] = useTimeSheet(
    {
      userId: id,
      initialState: selectedWeek,
    },
    back
  );

  const submit = (e) => {
    axios
      .put(`${url}/timesheets`, { ...timeSheet, employee_id: id })
      .then(() => {
        console.log('yay');
        back();
      })
      .catch((err) => {
        console.error(err);
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
