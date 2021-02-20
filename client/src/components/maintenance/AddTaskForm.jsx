import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';
import { gradient } from '../styledElements/styleGuid.js';
import axios from 'axios';
import url from '../../lib/apiPath';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);

    //each input field has its own state property and event handler
    this.state = {
      // employeeCreated: '',
      taskTitle: '',
      location: '',
      taskDescription: '',
      department: '',
      dueBy: '',
    };
    this.inputEmployeeName = this.inputEmployeeName.bind(this);
    this.inputTaskTitle = this.inputTaskTitle.bind(this);
    this.inputRoom = this.inputRoom.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.selectType = this.selectType.bind(this);
    this.inputDueDate = this.inputDueDate.bind(this);
    this.submitAddTaskForm = this.submitAddTaskForm.bind(this);
  }

  inputEmployeeName(event) {
    event.preventDefault();
    this.setState({ employeeCreated: event.target.value });
  }

  inputTaskTitle(event) {
    event.preventDefault();
    this.setState({ taskTitle: event.target.value });
  }

  inputRoom(event) {
    event.preventDefault();
    this.setState({ location: event.target.value });
  }

  inputDescription(event) {
    event.preventDefault();
    this.setState({ taskDescription: event.target.value });
  }

  selectType(event) {
    this.setState({ department: event.target.value });
  }

  inputDueDate(event) {
    event.preventDefault();
    let dueDate = new Date(event.target.value).toISOString();
    this.setState({ dueBy: dueDate });
  }

  //sends all form info to server in request body
  submitAddTaskForm(event) {
    // event.preventDefault();
    //from API docs: POST '/tasks' to add a new task
    //need to add user ID from authentication cookies to add to request object

    const data = {
      employeeCreated_id: this.props.employeeId,
      employeeCreated: this.props.name,
    };
    Object.assign(data, this.state);

    axios
      .post(`${url}/tasks/`, data)

      .then((results) => {
        alert('Task successfully added to task list');
        console.log('Form successfully submitted:', results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <HalfRoundDiv className={'addTask'}>
          <h1 className='formTitle'>Add a Task</h1>
          {/* <h2 className="employeeName">Employee Name</h2>
          <InputTypeText onChange={this.inputEmployeeName} className="employeeNameInput" placeholder={'Employee Name'} /> */}
          <h2 className='taskInputTitle'>Task Title</h2>
          <InputTypeText
            onChange={this.inputTaskTitle}
            className='taskInput'
            placeholder={'Task Title'}
          />
          <h2 className='roomInputTitle'>Location</h2>
          <InputTypeText
            onChange={this.inputRoom}
            className='roomInput'
            placeholder={'Room Number'}
          />
          <h2 className='textAreaTitle'>Task Description</h2>
          <TextAreaForm
            onChange={this.inputDescription}
            className='textArea'
            placeholder={'Task Description'}
          />
          <h2 className='radioTitle'>Department</h2>

          {/* radio button options do not have selected when I add the click handlers */}
          <form className='ticketType'>
            <label for='Housekeeping'>
              <input
                onClick={this.selectType}
                name='task'
                type='radio'
                value='Housekeeping'
                id='Housekeeping'
              />
              Housekeeping
            </label>
            <label for='Maintenance'>
              <input
                onClick={this.selectType}
                name='task'
                type='radio'
                value='Maintenance'
                id='Maintenance'
              />
              Maintenance
            </label>
          </form>
          <h2 className='dueByTitle'>Due By</h2>
          <InputTypeText
            type='datetime-local'
            className='dueBy'
            onChange={this.inputDueDate}
          />
          <FormButton
            onClick={() => {
              this.submitAddTaskForm();
              this.props.clickBack();
            }}
            className='submitButton'
          >
            Submit
          </FormButton>
        </HalfRoundDiv>
      </div>
    );
  }
}

export default AddTaskForm;
