import React, { useState } from 'react';
import styled from 'styled-components';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import FormRow from './FormRow';
import useEmployeeData from './useEmployeeData';
import FormButton from '../../styledElements/FormButton';
import { colors } from '../../styledElements/styleGuid';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

const positions = [
  { variable: 'frontDesk', name: 'Front Desk' },
  { variable: 'housekeeping', name: 'Housekeeping' },
  { variable: 'maintenance', name: 'Maintenance' },
  { variable: 'management', name: 'Management' },
  { variable: 'systemAdministration', name: 'System Administration' },
];

const EmployeeContainer = ({ employee = {} }) => {
  const [edit, setEdit] = useState(true);
  const [employeeInfo, setEmployeeInfo] = useEmployeeData(employee);
  console.log('test', employeeInfo);

  return (
    <div>
      <HalfRoundDiv padding={'20px'}>
        <FlexDiv>
          {fields.map((row, i) => {
            return (
              <FormRow
                name={row.field}
                placeholder={row.placeholder}
                defaultValue={employeeInfo && employeeInfo[row.field]}
                editMode={edit}
                onChange={setEmployeeInfo}
                label={row.name}
              />
            );
          })}
          <FormButton
            backgroundColor={colors.berry}
            onClick={(e) => {
              e.preventDefault();
              setEdit(!edit);
            }}
          >
            Edit
          </FormButton>
        </FlexDiv>
      </HalfRoundDiv>
    </div>
  );
};

export default EmployeeContainer;

// const sampleEmployee = {
//   _id: '60108729ffefc9bae107564e',
//   fistName: 'John',
//   lastName: 'Smith',
//   address1: '123 Hackreactor Rd',
//   address2: 'Apt 2',
//   city: 'New York',
//   state: 'NY',
//   zipcode: 10002,
//   country: 'United States',
//   phone: '123-456-7890',
//   email: 'jsmith@gmail.com',
//   wage: 15.0,
//   startDate: '2021-02-13',
//   position: 'Front Desk',
//   weekHours: 0,
//   isActive: true,
// };
