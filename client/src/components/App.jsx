import React from 'react';
import axios from 'axios';
import Landing from './landingPage/MainLanding';

import TextAreaForm from './styledElements/TextAreaForm.jsx';


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
      <main className='main'>
        <Landing />
      </main>
    );
  }
}

export default App;
