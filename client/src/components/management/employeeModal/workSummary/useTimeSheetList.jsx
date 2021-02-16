import axios from 'axios';
import { useEffect, useState } from 'react';

const useTimeSheetList = (employee) => {
  const [state, setState] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/timesheets/${employee._id}`, { params: { count: 20 } })
  //     .then(({ data }) => {
  //       const timeSheetList = data.map((sheet) => {
  //         const week = {};
  //         const splitEnd = sheet.weekEnd.split('-');
  //         const splitStart = sheet.weekStart.split('-');
  //         week.week = `${splitStart[1]}/${splitStart[2]} - ${splitEnd[1]}/${splitEnd[2]}/${splitEnd[0]}`;
  //         week.hours =
  //           sheet.monday +
  //           sheet.tuesday +
  //           sheet.wednesday +
  //           sheet.thursday +
  //           sheet.friday +
  //           sheet.saturday +
  //           sheet.sunday;
  //         week.wage = employee.wage;
  //         week.total = week.hours * week.wage;
  //         return week
  //       });
  //       setState(timeSheetList);
  //     });
  // }, []);

  return [state, useState];
};

export default useTimeSheetList;
// Week | Hr Worked | Hr Wage | Total
// {
//   timesheet_id: '60108729ffefc9bae1075652',
//   employee_id: '60108729ffefc9bae1075651',
//   monday: 8,
//   tuesday: 7,
//   wednesday: 8,
//   thursday: 5,
//   friday: 9,
//   saturday: 0,
//   sunday: 0,
//   weekStart: '2021-02-08',
//   weekEnd: '2021-02-14',
// }
