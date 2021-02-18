import React from 'react';

import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import FormButton from '../../styledElements/FormButton';

const ConfirmationPage = (props) => {
    return (
        <HalfRoundDiv
            className="mainBox"
            margin={'0 auto'}
        >
            <div>
            <div className="checkInTitleDiv"> Confirmation Page</div>
                <div> 
                    Booking guest: {props.selectedReservation.bookingGuest} <br/>
                    Check in date: {props.selectedReservation.checkIn} <br/>
                    Check out date: {props.selectedReservation.checkOut} <br/>
                    Room type: {props.selectedReservation.roomType} <br/>
                    ...Other info ...
                    {/* {props.selectedReservation.name} <br/>
                    {props.selectedReservation.name} <br/>
                    {props.selectedReservation.name} <br/> */}
                </div>
                <FormButton 
                className='searchButtonPlacement' 
                onClick={(e)=> {
                    props.setName('');
                    props.setResId('');
                    props.addPage(1);

                }}
                > 
                    Confirm
                </FormButton>
            </div>
        </HalfRoundDiv>
    )
}

export default ConfirmationPage;