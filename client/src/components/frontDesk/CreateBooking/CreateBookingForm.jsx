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
      checkInDate: '',
      checkOutDate: ''
    };
    this.inputDate = this.inputDate.bind(this);
    this.goToNext = this.goToNext.bind(this);
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
    if (event.target.name === 'checkInDate') {
      this.setState({checkInDate: event.target.value});
    } else if (event.target.name === 'checkOutDate') {
      this.setState({checkOutDate: event.target.value});
    }
  }

  render() {
    return (
      <HalfRoundDiv>
        {this.state.dateForm ? <SearchByDate inputDate={this.inputDate} goToNext={this.goToNext}/>
          : this.state.roomList ? <AvailableRooms goToNext={this.goToNext}/>
            : this.state.guestInfo ? <GuestInfo goToNext={this.goToNext}/>
              : <div>Placeholder for Confirmation Page</div>}
      </HalfRoundDiv>
    );
  }
}

export default CreateBookingForm;
