import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';

let SearchByDate = (props) => {
  return (
    <HalfRoundDiv>
      <h1>Desired Dates</h1>
      <h2>From:</h2>
      <InputTypeText type='date' name={'checkInDate'} onChange={props.inputDate}/>
      <h2>To:</h2>
      <InputTypeText type='date' name={'checkOutDate'} onChange={props.inputDate}/>
      <FormButton onClick={props.goToNext} id={'dateForm'}>
        Submit
      </FormButton>
    </HalfRoundDiv>
  );
};

export default SearchByDate;