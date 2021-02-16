import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';

let CreateBookingForm = () => {
  return (
    <div>
      <HalfRoundDiv className={'createBooking'}>
        <h1 className="bookingForm">Create Booking</h1>
        <h2 className="firstName">First Name</h2>
        <InputTypeText className="firstNameInput" placeholder={'First Name'}/>
        <h2 className="lastName">Last Name</h2>
        <InputTypeText className="lastNameInput" placeholder={'Last Name'}/>
        <h2 className="datesStayed">Desired Dates</h2>
        <form className="dateRange">
          <label for="checkIn">Check-In:<input type="date"/></label>
          <label for="checkOut">Check-Out:<input type="date"/></label>
        </form>
        <h2 className="roomType">Room Type</h2>
        <select className="roomDropdown">
          <option>Single</option>
          <option>Double</option>
          <option>Queen</option>
          <option>King</option>
        </select>
        <h2 className="addGuestsTitle">Additional Guests</h2>
        <form className="addGuests">
          <InputTypeText className="guest2" placeholder={'First Name'}/>
          <InputTypeText className="guest2" placeholder={'Last Name'}/>
          <InputTypeText className="guest3" placeholder={'First Name'}/>
          <InputTypeText className="guest3" placeholder={'Last Name'}/>
          <InputTypeText className="guest4" placeholder={'First Name'}/>
          <InputTypeText className="guest4" placeholder={'Last Name'}/>
        </form>
        <FormButton className="submitButton">
          Submit
        </FormButton>
      </HalfRoundDiv>
    </div>
  );
};

export default CreateBookingForm;