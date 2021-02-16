import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const dataMapper = (data, employee) =>
  data.map((sheet) => {
    const week = {};
    const splitEnd = sheet.weekEnd.split('-');
    const splitStart = sheet.weekStart.split('-');
    week.week = `${splitStart[1]}/${splitStart[2]} - ${splitEnd[1]}/${splitEnd[2]}/${splitEnd[0]}`;
    week.hours =
      sheet.monday +
      sheet.tuesday +
      sheet.wednesday +
      sheet.thursday +
      sheet.friday +
      sheet.saturday +
      sheet.sunday;
    week.wage = employee.wage;
    week.total = week.hours * week.wage;
    return week;
  });

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children, employee, sampleData }) => {
  const [employeeData, setEmployeeData] = useState(employee ? employee : {});
  const [timeSheetList, setTimeSheetList] = useState([]);
  const [newEmployee, setNewEmployee] = useState(employee ? false : true);
  useEffect(() => {
    if (!newEmployee) {
      if (sampleData) {
        setTimeSheetList(dataMapper(sampleData, employeeData));
      } else {
        axios
          .get(`/timesheets/${employee._id}`, { params: { count: 20 } })
          .then(({ data }) => {
            setTimeSheetList(dataMapper(data, employeeData));
          });
      }
    }
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        useEmployeeData: [employeeData, setEmployeeData],
        useTimeSheetList: [timeSheetList, setTimeSheetList],
        useNewEmployee: [newEmployee, setNewEmployee],
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
