import React from 'react';

import HalfRoundDiv from '../../styledElements/HalfRoundDiv';

const AvailableRooms = (props) => {
    return (
        <HalfRoundDiv
            margin="0 30px 0 30px"
            id="reservationOuterContainer"
        >
            <div>
            <div className="checkInTitleDiv"> Check-In: Available Rooms</div>
                <div id="roomsListInnerContainer">

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
                    <div className='roomBox'> 1 </div>
                    <div className='roomBox'> 2 </div>
                    <div className='roomBox'> 3 </div>
                    <div className='roomBox'> 4 </div>
                    <div className='roomBox'> 5 </div>
                    <div className='roomBox'> 6 </div>
                    <div className='roomBox'> 7 </div>
             
                </div>
            </div>
        </HalfRoundDiv>
    )
}

export default AvailableRooms;