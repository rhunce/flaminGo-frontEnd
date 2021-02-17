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

                    <div className='roomBox' onClick={props.addPage}> 112 </div>
                    <div className='roomBox'> 113 </div>
                    <div className='roomBox'> 108 </div>
                    <div className='roomBox'> 110 </div>
                    <div className='roomBox'> 511 </div>
                    <div className='roomBox'> 6 </div>
                    <div className='roomBox'> 7 </div>
                    <div className='roomBox'> 1 </div>
                    <div className='roomBox'> 2 </div>
                    <div className='roomBox'> 3 </div>
                    <div className='roomBox'> 4 </div>
                    <div className='roomBox'> 5 </div>
                    <div className='roomBox'> 6 </div>
                    <div className='roomBox'> 7 </div>
                    <div className='roomBox'> 1 </div>
                    <div className='roomBox'> 2 </div>
                    <div className='roomBox'> 3 </div>
                    <div className='roomBox'> 4 </div>
                    <div className='roomBox'> 5 </div>
                    <div className='roomBox'> 6 </div>
                    <div className='roomBox'> 7 </div>
             
                </div>
            </div>
            <FormButton className='searchButtonPlacement' onClick={props.subtractPage}> Back</FormButton>
        </HalfRoundDiv>
    )
}

export default AvailableRooms;