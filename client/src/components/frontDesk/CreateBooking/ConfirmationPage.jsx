import React from 'react';
import FlexCenterContainer from '../../landingPage/FlexCenterContainer.jsx';
import FormButton from '../../styledElements/FormButton.jsx';

let ConfirmationPage = (props) => {
  return (
    <FlexCenterContainer>
      <ul>
        {Object.values(props).map((prop) => {
          return (
            <div>
              {prop}
            </div>
          )
        })}
      </ul>
      <FormButton onClick={() => {
        props.submitBooking();
        props.clickBack();
      }}>
        Confirm Booking
      </FormButton>
    </FlexCenterContainer>
  )
}

export default ConfirmationPage;