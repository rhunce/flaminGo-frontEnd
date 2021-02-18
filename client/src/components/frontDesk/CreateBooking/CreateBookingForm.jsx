import React from "react";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import SearchByDate from "./SearchByDate.jsx";
import AvailableRooms from './AvailableRooms.jsx';
import GuestInfo from './GuestInfo.jsx';

class CreateBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateForm: true,
      roomList: false,
      guestInfo: false,
      bookingClient: {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      },
      room_id: '',
      roomType_id: '',
      checkIn: '',
      checkOut: '',
      guestList: []
    };
    this.inputDate = this.inputDate.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
    this.getGuestInfo = this.getGuestInfo.bind(this);
  }

  getGuestInfo(event) {
    event.preventDefault();
    this.setState({ bookingClient: {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      phone: event.target[2].value,
      email: event.target[3].value
    }});
  }

  goToNext(event) {
    event.preventDefault();
    if (event.target.id === 'dateForm') {
      this.setState({dateForm: false, roomList: true});
      //also need to set state of event.target.value
    } else if (event.target.id === 'roomList') {
      this.setState({roomList: false, guestInfo: true});
      //also need to set state of event.target.value
    } else {
      this.setState({guestInfo: false});
    }
  }

  inputDate(event) {
    event.preventDefault();
    console.log(event.target.name);
    if (event.target.name === 'checkIn') {
      this.setState({checkIn: event.target.value});
    } else if (event.target.name === 'checkOut') {
      this.setState({checkOut: event.target.value});
    }
  }

  selectRoom(event) {
    event.preventDefault();
    console.log(event.target);
    this.setState({room_id: event.target.name});
  }

  render() {
    return (
      <HalfRoundDiv>
        {this.state.dateForm ? <SearchByDate inputDate={this.inputDate} goToNext={this.goToNext}/>
          : this.state.roomList ? <AvailableRooms selectRoom={this.selectRoom} goToNext={this.goToNext}/>
            : this.state.guestInfo ? <GuestInfo getGuestInfo={this.getGuestInfo} goToNext={this.goToNext}/>
              : <div>Placeholder for Confirmation Page</div>}
      </HalfRoundDiv>
    );
  }
}

export default CreateBookingForm;
