import React from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      reservationIdInput: '',
      roomNumberInput: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <HalfRoundDiv id="mainBox">
        <div className="checkInTitleDiv">Check-Out: Search for Reservations</div>
        <div className="centeredInputBars">
          <label htmlFor="nameInput" className="checkOutLabels">Name</label> <br/>
          <InputTypeText
            name="nameInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
          /> <br/>
          <label htmlFor="reservationIdInput" className="checkOutLabels">Reservation ID</label> <br/>
          <InputTypeText
            name="reservationIdInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
          />
          <label htmlFor="roomNumberInput" className="checkOutLabels">Room Number</label> <br/>
          <InputTypeText
            name="roomNumberInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FormButton
            id="searchButtonPlacement"
            onClick={(e) => {
              this.props.nextPageClickHandler(e, this.state.nameInput, this.state.reservationIdInput, this.state.roomNumberInput);
            }}>Search
          </FormButton>
        </div>
      </HalfRoundDiv>
    );
  }
}

export default Search;