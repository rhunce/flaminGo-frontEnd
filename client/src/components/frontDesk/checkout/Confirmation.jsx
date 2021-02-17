import React from 'react';
import Search from './Search';
import Results from './Results';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';

// import styled from 'styled-components';
// import LandingButtons from '../landingPage/LandingButtons';
// import useChoosePath from '../landingPage/useChoosePath';
// import BackArrow from '../styledElements/BackArrow';
// import ListMaster from '../GlobalComponents/ListMaster';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HalfRoundDiv id="mainBox">
        <div className="checkInTitleDiv">Guest Successfully Checked Out!</div>
        <div className="redirectMessage"><i>Please click on back button to return to Main Menu</i></div>
      </HalfRoundDiv>
    );
  }
}

export default Confirmation;