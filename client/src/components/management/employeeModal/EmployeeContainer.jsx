import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styledElements/styleGuid';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import EmployeeForm from './EmployeeForm';

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

const EmployeeContainer = ({ employee = {}, newEmployee }) => (
  <div>
    <HalfRoundDiv padding={'20px'}>
      <FlexDiv>
        <EmployeeForm employee={employee} newEmployee={newEmployee} />
      </FlexDiv>
    </HalfRoundDiv>
  </div>
);

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
