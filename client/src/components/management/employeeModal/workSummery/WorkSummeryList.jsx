import React from 'react';
import styled from 'styled-components';
import { colors, gradients } from '../../../styledElements/styleGuid';
import useTimeSheetList from './useTimeSheetList';
import ListItem from './WorkSummeryListItem';
// just for sample
import { timeSheetSample, sampleEmployee } from '../sampleEmployeeData';

const ListContainer = styled.div`
  background-image: ${gradients.berryToGrape};
  height: 540px;
  border-radius: 20px;
  padding: 20px;
`;

const ScrollBox = styled.div`
  height: 510px;
  overflow-y: auto;
  padding: 10px;
`;

const WorkSummeryList = ({ employData }) => {
  const [list, setList] = useTimeSheetList();

  const timeSheetList = timeSheetSample.map((sheet) => {
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
    week.wage = sampleEmployee.wage;
    week.total = week.hours * week.wage;
    return week;
  });
  setList(timeSheetList);
  console.log(timeSheetList);
  return (
    <ListContainer>
      {employData ? (
        <ScrollBox>
          {timeSheetList.map((week, i) => (
            <ListItem key={week.week} week={week} />
          ))}
        </ScrollBox>
      ) : null}
    </ListContainer>
  );
};

export default WorkSummeryList;
