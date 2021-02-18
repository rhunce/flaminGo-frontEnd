import React from 'react';

import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import FormButton from '../../styledElements/FormButton';

const AvailableRooms = (props) => {
    return (
        <HalfRoundDiv
            margin="0 30px 0 30px"
            id="reservationOuterContainer"
        >
            <div>
            <div className="checkInTitleDiv"> Check-In: Available Rooms</div>
                <div id="roomsListInnerContainer">
                    
                    <div className='roomBox' onClick={(e)=> {props.addPage()}}> {props.selectedReservation.roomNumber} </div>
                    <div className='roomBox'> 113 </div>
                    <div className='roomBox'> 108 </div>
                    <div className='roomBox'> 110 </div>
                    <div className='roomBox'> 511 </div>
                    <div className='roomBox'> 643 </div>
                    <div className='roomBox'> 743 </div>
                    <div className='roomBox'> 143 </div>
                    <div className='roomBox'> 243 </div>
                    <div className='roomBox'> 343 </div>
                    <div className='roomBox'> 443 </div>
                    <div className='roomBox'> 543 </div>
                    <div className='roomBox'> 643 </div>
                    <div className='roomBox'> 743 </div>
                    <div className='roomBox'> 143 </div>
                    <div className='roomBox'> 243 </div>
                    <div className='roomBox'> 343 </div>
                    <div className='roomBox'> 443 </div>
                    <div className='roomBox'> 543 </div>
                    <div className='roomBox'> 643 </div>
                    <div className='roomBox'> 743 </div>
             
                </div>
            </div>
            <FormButton className='searchButtonPlacement' onClick={props.subtractPage}> Back</FormButton>
        </HalfRoundDiv>
    )
}

export default AvailableRooms;