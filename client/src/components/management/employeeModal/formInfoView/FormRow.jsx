import React from 'react';
import { FlexRow, FormLabel } from './EmployFormPositioning';
import FormInput from '../../../styledElements/InputTypeText';

const FormRow = ({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  editMode,
  margin,
}) => {
  return (
    <FlexRow margin={margin}>
      <FormLabel>{`${label}:`}</FormLabel>
      <FormInput
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
