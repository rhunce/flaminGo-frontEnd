import React from 'react';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../../styledElements/TextAreaForm.jsx';

let SearchByDate = (props) => {
  return (
    <HalfRoundDiv className={'dateForm'}>
      <h1>Desired Dates</h1>
      <h2>From:</h2>
      <InputTypeText type='date' name={'checkIn'} onChange={props.inputDate}/>
      <h2>To:</h2>
      <InputTypeText type='date' name={'checkOut'} onChange={props.inputDate}/>
      <FormButton onClick={props.goToNext} id={'dateForm'}>
        Submit
      </FormButton>
    </HalfRoundDiv>
  );
};

export default SearchByDate;