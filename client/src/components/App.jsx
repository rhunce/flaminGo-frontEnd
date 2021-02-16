import React from 'react';
import axios from 'axios';
import TextAreaForm from './styledElements/TextAreaForm.jsx';
import MainHeader from './GlobalComponents/Header.jsx';
import Landing from './landingPage/MainLanding';
import Login from './landingPage/Login.jsx';

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
      <Login />
      // <main className='main'>
      //   <MainHeader />
      //   <Landing />
      // </main>
    );
  }
}

export default App;
