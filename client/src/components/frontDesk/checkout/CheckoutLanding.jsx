import React from 'react';
import Search from './Search';
import Results from './Results';

// import styled from 'styled-components';
// import LandingButtons from '../landingPage/LandingButtons';
// import useChoosePath from '../landingPage/useChoosePath';
// import BackArrow from '../styledElements/BackArrow';
// import ListMaster from '../GlobalComponents/ListMaster';


class CheckoutLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPage: true,
      resultsPage: false,
      inputName: '',
      inputReservationId: '',
      inputRoomNumber: ''
    };
    this.nextPageClickHandler = this.nextPageClickHandler.bind(this);
  }

  nextPageClickHandler(e, name, reservationId, roomNumber) {
    this.setState({
      searchPage: !this.state.searchPage,
      resultsPage: !this.state.resultsPage,
      inputName: name,
      inputReservationId: reservationId,
      inputRoomNumber: roomNumber
    });
  }

  render() {
    return (
      <div>
        {this.state.searchPage ? <Search nextPageClickHandler={this.nextPageClickHandler}/> :
          <Results
            inputName={this.state.inputName}
            inputReservationId={this.state.inputReservationId}
            inputRoomNumber={this.state.inputRoomNumber}
          />}
      </div>
    );
  }
}

export default CheckoutLanding;