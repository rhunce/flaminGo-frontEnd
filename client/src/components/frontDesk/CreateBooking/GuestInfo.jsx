import React from 'react';
import FormButton from "../../styledElements/FormButton.jsx";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import InputTypeText from "../../styledElements/InputTypeText.jsx";

let GuestInfo = (props) => {
  return (
    <HalfRoundDiv>
      <form>
        <h2>First Name</h2>
        <InputTypeText/>
        <h2>Last Name</h2>
        <InputTypeText/>
      </form>
      <h2>Additional Guests</h2>
      <form>
        <h2>Guest 2</h2>
        <InputTypeText/>
        <InputTypeText/>
        <h2>Guest 3</h2>
        <InputTypeText/>
        <InputTypeText/>
        <h2>Guest 4</h2>
        <InputTypeText/>
        <InputTypeText/>
      </form>
      <FormButton onClick={props.goToNext} id={'guestInfo'}>
        Confirm Booking
      </FormButton>
    </HalfRoundDiv>
  );
};

export default GuestInfo;