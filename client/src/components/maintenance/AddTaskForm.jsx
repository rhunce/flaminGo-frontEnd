import React from 'react';
import BigButton from '../styledElements/BigButton.jsx';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';
import {gradient} from '../styledElements/styleGuid.js';

let AddTaskForm = () => {
  return (
    <div>
      <HalfRoundDiv gradient={gradient.clementineToCarrot} className={'addTask'}>
        <h1>Add a Task</h1>
        <h2>Task Title</h2>
        <InputTypeText name={'Task Title'} placeholder={'Task Title'}/>
        <h2>Room Number</h2>
        <InputTypeText placeholder={'Room Number'}/>
        <h2>Task Description</h2>
        <TextAreaForm placeholder={'Task Description'}/>
        <h2>Task Description</h2>
        <FormButton>
          Submit
        </FormButton>
      </HalfRoundDiv>
    </div>
  );
};

export default AddTaskForm;