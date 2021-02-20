import React from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';

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