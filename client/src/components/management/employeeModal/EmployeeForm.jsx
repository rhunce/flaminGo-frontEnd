import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import ModalTitle from '../../styledElements/ModalTitle';
import FormRow from './FormRow';
import useEmployeeInfo from './useEmployeeData';
import FormButton from '../../styledElements/FormButton';

const fields = [
  { field: 'firstName', name: 'First Name' },
  { field: 'lastName', name: 'Last Name' },
  { field: 'address1', name: 'Address 1' },
  { field: 'address2', name: 'Address 2' },
  { field: 'phone', name: 'Phone', placeholder: '000-000-0000' },
  { field: 'email', name: 'Email', placeholder: 'example@example.com' },
  { field: 'wage', name: 'Hourly Wage', placeholder: '$' },
  { field: 'startDate', name: 'Start Date', placeholder: 'YYYY-MM-DD' },
];

const EmployeeForm = ({ employee, newEmployee }) => {
  const [employeeInfo, setEmployeeInfo, editEmployeeInfo] = useEmployeeInfo(
    employee
  );
  const [editMode, setEditMode] = useState(employeeInfo ? false : true);

  const saveNewEmployee = () => {
    setEditMode(false);
    console.log('test', employeeInfo);
  };

  return (
    <div>
      <ModalTitle>
        {employeeInfo && (employeeInfo.firstName || employeeInfo.lastName)
          ? `${employeeInfo.firstName ? employeeInfo.firstName : ''} ${
              employeeInfo.lastName ? employeeInfo.lastName : ''
            }`
          : `New Employee`}
      </ModalTitle>
      {fields.map((row, i) => {
        return (
          <FormRow
            key={i + row.field}
            name={row.field}
            placeholder={row.placeholder}
            defaultValue={employeeInfo && employeeInfo[row.field]}
            editMode={editMode}
            onChange={editEmployeeInfo}
            label={row.name}
          />
        );
      })}
      {editMode ? (
        <div>
          <FormButton onClick={saveNewEmployee}>Save</FormButton>
          <FormButton onClick={() => setEmployeeInfo(employee)}>
            Cancel
          </FormButton>
        </div>
      ) : (
        <FormButton
          backgroundColor={colors.berry}
          onClick={(e) => {
            e.preventDefault();
            setEditMode(true);
          }}
        >
          Edit
        </FormButton>
      )}
    </div>
  );
};

export default EmployeeForm;
