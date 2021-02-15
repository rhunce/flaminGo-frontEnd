import React, { useState } from 'react';
import { colors } from '../../styledElements/styleGuid';
import ModalTitle from '../../styledElements/ModalTitle';
import FormRow from './FormRow';
import useEmployeeInfo from './useEmployeeData';
import FormButton from '../../styledElements/FormButton';
import PositionDropDown from './PositionDropDown';
import { fields, mandatory } from './employeeFormConstants';
import axios from 'axios';

const EmployeeForm = ({ employee, newEmployee }) => {
  const [employeeInfo, setEmployeeInfo, editEmployeeInfo] = useEmployeeInfo(
    employee
  );
  const [editMode, setEditMode] = useState(employeeInfo ? false : true);
  const [invalidEntry, setInvalidEntry] = useState(false);

  const dataChecker = (employeeInfo) => {
    for (const row of mandatory) {
      const field = row.field;
      if (!employeeInfo.hasOwnProperty(field)) return false;
    }
    return true;
  };

  const saveEmployee = () => {
    setInvalidEntry(false);
    if (dataChecker(employeeInfo)) {
      employeeInfo.country = 'Bermuda';
      employeeInfo.isActive = true;

      if (newEmployee) {
        // axios.post(`/employees`, employeeInfo).then(() => setEditMode(true));
      } else {
        // axios.put(`/employees/${employee._id}`).then(() => setEditMode(true));;
      }
      console.log('this will be posted', employeeInfo);
      setEditMode(false);
    } else {
      setInvalidEntry(true);
    }
  };

  return (
    <div>
      <ModalTitle margin='0'>
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
      <PositionDropDown
        onChange={editEmployeeInfo}
        employeeInfo={employeeInfo}
        editMode={editMode}
      />
      {editMode ? (
        <div>
          {invalidEntry ? <div>Please Check Your Entries</div> : null}
          <FormButton margin={'10px'} onClick={saveEmployee}>
            Save
          </FormButton>
          <FormButton
            margin={'10px'}
            backgroundColor='berry'
            onClick={() => setEmployeeInfo(employee)}
          >
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
    </div>
  );
};

export default EmployeeForm;
