import React from 'react';
import axios from 'axios';
import TextAreaForm from './styledElements/TextAreaForm.jsx'
import ListMaster from './GlobalComponents/ListMaster.jsx'
import MainHeader from './GlobalComponents/Header.jsx'

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
        <MainHeader />
        <ListMaster type="room"/>
      </div>
    );
  }
}

export default App;
