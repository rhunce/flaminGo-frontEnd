import React from 'react';
import { FlexRow, FormLabel } from './EmployFormPositioning';
import DropDown from '../../styledElements/DropDown';
import positions from '../../../lib/positionsConstant';
import FormRow from './FormRow';

const PositionDropDown = ({ onChange, editMode, employeeInfo }) => {
  return (
    <FlexRow>
      {editMode ? (
        <div>
          <FormLabel>Position:</FormLabel>
          <DropDown width={'211px'} name='position' onChange={onChange}>
            <option value='' disabled selected hidden>
              {employeeInfo ? employeeInfo.position : 'Position...'}
            </option>
            {positions.map((position, i) => (
              <option key={position.variable + i} value={position.variable}>
                {position.name}
              </option>
            ))}
          </DropDown>
        </div>
      ) : (
        <div>
          {employeeInfo ? (
            <FormRow
              name={employeeInfo.position}
              defaultValue={employeeInfo && employeeInfo.position}
              label={'Position'}
            />
          ) : null}
        </div>
      )}
    </FlexRow>
  );
};

export default PositionDropDown;
