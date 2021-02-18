import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../EmployeeContext';
import ModalTitle from '../../../styledElements/ModalTitle';
import FormRow from './FormRow';
import FormButton from '../../../styledElements/FormButton';
import PositionDropDown from './PositionDropDown';
import { fields, mandatory } from './employeeFormConstants';
import axios from 'axios';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmployeeForm = ({ back }) => {
  const { useEmployeeData, useNewEmployee } = useContext(EmployeeContext);
  const [newEmployee] = useNewEmployee;
  const [employee, setEmployee] = useEmployeeData;

  const editEmployee = (e) => {
    setEmployee((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [editMode, setEditMode] = useState(newEmployee ? true : false);
  const [invalidEntry, setInvalidEntry] = useState(false);

  const dataChecker = (employee) => {
    for (const row of mandatory) {
      const field = row.field;
      if (!employee.hasOwnProperty(field)) return false;
    }
    return true;
  };

  const saveEmployee = () => {
    setInvalidEntry(false);
    if (dataChecker(employee)) {
      employee.country = 'Bermuda';
      employee.isActive = true;
      const [firstName, lastName] = employee.name.split(' ');
      const user = {
        ...employee,
        firstName,
        lastName,
      };
      if (newEmployee) {
        axios.post(`/employees`, user).then(({ data }) => {
          console.log('this was posted', data);
          setEditMode(true);
        });
      } else {
        axios
          .put(`/employees/${employee.id}`, user)
          .then(({ data }) => {
            console.log('this was updated', data);
            back();
          })
          .catch((err) => {
            console.error(err);
          });
      }
      setEditMode(false);
    } else {
      setInvalidEntry(true);
    }
  };

  return (
    <FlexDiv>
      <ModalTitle margin='0'>
        {employee && employee.name ? `${employee.name}` : `New Employee`}
      </ModalTitle>
      {fields.map((row, i) => {
        return (
          <FormRow
            key={i + row.field}
            name={row.field}
            placeholder={row.placeholder}
            defaultValue={employee && employee[row.field]}
            editMode={editMode}
            onChange={editEmployee}
            label={row.name}
          />
        );
      })}
      <PositionDropDown
        onChange={editEmployee}
        employee={employee}
        editMode={editMode}
      />
      {editMode ? (
        <div>
          {invalidEntry ? <div>Please Check Your Entries</div> : null}
          <FormButton margin={'10px'} onClick={saveEmployee}>
            Save
          </FormButton>
          <FormButton margin={'10px'} backgroundColor='berry' onClick={back}>
            Cancel
          </FormButton>
        </div>
      ) : (
        <FormButton
          margin={'10px'}
          backgroundColor='berry'
          onClick={(e) => {
            e.preventDefault();
            setEditMode(true);
          }}
        >
          Edit
        </FormButton>
      )}
    </FlexDiv>
  );
};

export default EmployeeForm;
