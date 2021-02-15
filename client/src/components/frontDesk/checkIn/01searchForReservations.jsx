import React from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';



const SearchForReservations = () => {
    return (
        <HalfRoundDiv className="mainBox">
                <div className="checkInTitleDiv"> Check-In Search for Reservations</div>
                <label for="checkInGuestName"> hi</label>
                <InputTypeText id="checkInGuestName"/>
                <FormButton backgroundColor="berry" className="searchButtonPlacement"> Search </FormButton>
        </HalfRoundDiv>
    )
}

export default SearchForReservations;