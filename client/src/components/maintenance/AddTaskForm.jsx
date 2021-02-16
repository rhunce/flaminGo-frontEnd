import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';
import { gradient } from '../styledElements/styleGuid.js';
import axios from 'axios';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);

    //each input field has its own state property and event handler
    this.state = {
      taskTitle: '',
      roomNumber: 0,
      taskDescription: '',
      taskType: ''
    };
    this.inputTaskTitle = this.inputTaskTitle.bind(this);
    this.inputRoom = this.inputRoom.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.selectType = this.selectType.bind(this);
    this.submitAddTaskForm = this.submitAddTaskForm.bind(this);
  }

  inputTaskTitle(event) {
    event.preventDefault();
    this.setState({taskTitle: event.target.value});
  }

  inputRoom(event) {
    event.preventDefault();
    this.setState({roomNumber: event.target.value});
  }

  inputDescription(event) {
    event.preventDefault();
    this.setState({taskDescription: event.target.value});
  }

  selectType(event) {
    event.preventDefault();
    this.setState({taskType: event.target.value});
  }

  //sends all form info to server in request body
  submitAddTaskForm(event) {
    event.preventDefault();
    //from API docs: POST '/tasks' to add a new task
    axios.post('/tasks', this.state)
      .then((results) => { console.log('Form successfully submitted'); })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <div>
        <HalfRoundDiv className={'addTask'}>
          <h1 className="formTitle">Add a Task</h1>
          <h2 className="taskInputTitle">Task Title</h2>
          <InputTypeText onChange={this.inputTaskTitle} className="taskInput" placeholder={'Task Title'} />
          <h2 className="roomInputTitle">Room Number</h2>
          <InputTypeText onChange={this.inputRoom} className="roomInput" placeholder={'Room Number'} />
          <h2 className="textAreaTitle">Task Description</h2>
          <TextAreaForm onChange={this.inputDescription} className="textArea" placeholder={'Task Description'} />
          <h2 className="radioTitle">Department</h2>

          {/* radio button options are not shown as selected when I add the click handlers */}
          <form className="ticketType">
            <label for="Housekeeping">
              <input
                onClick={this.selectType}
                name="task"
                type="radio"
                value="Housekeeping"
                id="Housekeeping"
              />
              Housekeeping
            </label>
            <label for="Maintenance">
              <input
                onClick={this.selectType}
                name="task"
                type="radio"
                value="Maintenance"
                id="Maintenance"
              />
              Maintenance
            </label>
          </form>
          <FormButton onClick={this.submitAddTaskForm} className="submitButton">Submit</FormButton>
        </HalfRoundDiv>
      </div>
    );
  }
}

export default AddTaskForm;
