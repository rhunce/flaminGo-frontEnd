import React from 'react';
import Search from './Search';
import Results from './Results';
import Confirmation from './Confirmation';
import axios from 'axios';

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
      checkoutConfirmedPage: false,
      inputName: '',
      inputReservationId: '',
      inputRoomNumber: ''
    };
    this.nextPageClickHandler = this.nextPageClickHandler.bind(this);
  }

  nextPageClickHandler(e, name, reservationId, roomNumber) {
    if (this.state.searchPage === true) {


      this.setState({
        searchPage: !this.state.searchPage,
        resultsPage: !this.state.resultsPage,
        inputName: name,
        inputReservationId: reservationId,
        inputRoomNumber: roomNumber
      });
    } else if (this.state.resultsPage === true) {
      this.setState({
        resultsPage: !this.state.resultsPage,
        checkoutConfirmedPage: !this.state.checkoutConfirmedPage,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.searchPage === true ?
          <Search nextPageClickHandler={this.nextPageClickHandler}/> :
          this.state.resultsPage === true ? <Results inputName={this.state.inputName} inputReservationId={this.state.inputReservationId} inputRoomNumber={this.state.inputRoomNumber} nextPageClickHandler={this.nextPageClickHandler}/> : <Confirmation />}
      </div>
    );
  }
}

export default CheckoutLanding;