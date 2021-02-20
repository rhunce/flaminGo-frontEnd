import React from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import SearchByDate from './SearchByDate.jsx';
import AvailableRooms from './AvailableRooms.jsx';
import GuestInfo from './GuestInfo.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';
import axios from 'axios';
import url from '../../../lib/apiPath';

class CreateBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableRooms: [],
      dateForm: true,
      roomList: false,
      guestInfo: false,
      bookingGuest: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
      room_id: '',
      roomType_id: '',
      roomType: '',
      checkIn: '',
      checkOut: '',
      guestList: [],
    };
    this.inputDate = this.inputDate.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
    this.getGuestInfo = this.getGuestInfo.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
  }

  getGuestInfo(e, form) {
    e.preventDefault();
    this.setState({
      bookingGuest: form,
    });
    this.goToNext(e);
  }

  goToNext(event) {
    event.preventDefault();
    if (event.target.id === 'dateForm') {
      this.setState({ dateForm: false, roomList: true });
      //also need to set state of event.target.value
    } else if (event.target.id === 'roomList') {
      this.setState({ roomList: false, guestInfo: true });
      //also need to set state of event.target.value
    } else {
      this.setState({ guestInfo: false });
    }
  }

  inputDate(event) {
    event.preventDefault();
    if (event.target.name === 'checkIn') {
      this.setState({ checkIn: event.target.value });
    } else if (event.target.name === 'checkOut') {
      this.setState({ checkOut: event.target.value });
    }
  }

  selectRoom(event) {
    event.preventDefault();
    this.setState({ roomType: event.target.name });
  }

  getAvailableRooms() {
    axios
      .get(`${url}/reservations/availability/123`)
      .then((reservations) => {
        let availableRoomTypes = reservations.data.results.map((rez) => {
          return rez.name;
        });
        this.setState({ availableRooms: availableRoomTypes });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //expected POST request body
  // let { roomType, checkIn, checkOut, guestList, bookingGuest } = req.body;

  submitBooking() {
    let body = {
      roomType: this.state.roomType,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      guestList: this.state.guestList,
      bookingGuest: this.state.bookingGuest,
    };
    axios
      .post(`${url}/reservations/`, body)
      .then((result) => {
        alert('Successfully Booked Reservation!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getAvailableRooms();
  }

  render() {
    return (
      <HalfRoundDiv>
        {this.state.dateForm ? (
          <SearchByDate inputDate={this.inputDate} goToNext={this.goToNext} />
        ) : this.state.roomList ? (
          <AvailableRooms
            selectRoom={this.selectRoom}
            goToNext={this.goToNext}
            availableRooms={this.state.availableRooms}
          />
        ) : this.state.guestInfo ? (
          <GuestInfo getGuestInfo={this.getGuestInfo} />
        ) : (
          <ConfirmationPage
            firstName={this.state.bookingGuest.firstName}
            lastName={this.state.bookingGuest.lastName}
            phone={this.state.bookingGuest.phone}
            email={this.state.bookingGuest.email}
            roomType={this.state.roomType}
            checkIn={this.state.checkIn}
            checkOut={this.state.checkOut}
            guestList={this.state.guestList}
            submitBooking={this.submitBooking}
            clickBack={this.props.clickBack}
          />
        )}
      </HalfRoundDiv>
    );
  }
}

export default CreateBookingForm;
