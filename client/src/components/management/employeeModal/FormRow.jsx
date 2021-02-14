import React from 'react';
import styled from 'styled-components';
import FormInput from '../../styledElements/InputTypeText';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  width: 328px;
`;

const FormLabel = styled.label`
  margin-right: 15px;
`;

const FormRow = ({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  editMode,
}) => {
  return (
    <FlexRow>
      <FormLabel>{`${label}:`}</FormLabel>
      <FormInput
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FlexRow>
  );
};

export default FormRow;
