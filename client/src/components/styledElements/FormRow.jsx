import React from 'react';
import { FlexRow, FormLabel } from '../management/employeeModal/formInfoView/EmployFormPositioning';
import FormInput from './InputTypeText';

const FormRow = ({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  editMode,
  margin,
  value,
}) => {
  return (
    <FlexRow margin={margin}>
      <FormLabel>{`${label}:`}</FormLabel>
      <FormInput
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={editMode ? placeholder : undefined}
        border={!editMode && 'none'}
        disabled={!editMode}
        type={name === 'startDate' ? 'date' : 'text'}
        width={name === 'startDate' ? '169px' : undefined}
      />
    </FlexRow>
  );
};

export default FormRow;
