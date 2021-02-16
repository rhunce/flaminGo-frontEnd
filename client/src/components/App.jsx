import React from 'react';
import axios from 'axios';
import TextAreaForm from './styledElements/TextAreaForm.jsx';
import AddTaskForm from './maintenance/AddTaskForm.jsx';
import CreateBookingForm from './maintenance/CreateBookingForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {}

  render() {
    return (
      <div>
        HrNYC34 PROJECT
        <h1> {this.props.projectName} </h1>
        <TextAreaForm />
        <AddTaskForm/>
        <CreateBookingForm/>
      </div>
    );
  }
}

export default App;
