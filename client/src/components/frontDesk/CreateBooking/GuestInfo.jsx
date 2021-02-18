import React from 'react';
import FormButton from "../../styledElements/FormButton.jsx";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import InputTypeText from "../../styledElements/InputTypeText.jsx";

let GuestInfo = (props) => {
  return (
    <HalfRoundDiv>
      <form onSubmit={(event) => {
        props.getGuestInfo(event);
        props.goToNext(event);
      }}>
        <h2>First Name</h2>
        <InputTypeText placeholder={'First Name'}/>
        <h2>Last Name</h2>
        <InputTypeText placeholder={'Last Name'}/>
        <h2>Phone</h2>
        <InputTypeText placeholder={'Phone Number'}/>
        <h2>Email</h2>
        <InputTypeText placeholder={'Email'}/>
        <InputTypeText
          type='submit'
          onClick={props.goToNext}
          id={'guestInfo'}
        />
      </form>
      {/* <h2>Additional Guests</h2>
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
      </form> */}

    </HalfRoundDiv>
  );
};

export default GuestInfo;