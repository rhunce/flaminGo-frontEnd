import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import TextAreaForm from './styledElements/TextAreaForm.jsx';
import AddTaskForm from './maintenance/AddTaskForm.jsx';
=======
import TextAreaForm from './styledElements/TextAreaForm.jsx'
import MainHeader from './GlobalComponents/Header.jsx'
import Landing from './landingPage/MainLanding';
>>>>>>> dev

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'berry',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {}

  render() {
    return (
<<<<<<< HEAD
      <div>
        HrNYC34 PROJECT
        <h1> {this.props.projectName} </h1>
        <TextAreaForm />
        <AddTaskForm/>
      </div>
=======
      <main className='main'>
        <MainHeader />
        <Landing />
      </main>
>>>>>>> dev
    );
  }
}

export default App;
