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
      
                    <div className="tables">
                    <div className="headings"><b>RESERVATION INFORMATION</b></div>
                    <table>
                        <tbody>
                        <tr>
                            <td>NAME</td>
                            <td>{props.selectedReservation.bookingGuest.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td>ROOM NUMBER</td>
                            <td>{props.selectedReservation.roomNumber}</td>
                        </tr>
                        <tr>
                            <td>RESERVATION ID</td>
                            <td>{props.selectedReservation._id}</td>
                        </tr>
                        <tr>
                            <td>CHECKIN DATE</td>
                            <td>{props.selectedReservation.checkIn}</td>
                        </tr>
                        <tr>
                            <td>CHECKOUT DATE</td>
                            <td>{props.selectedReservation.checkOut}</td>
                        </tr> 
                        <tr>
                            <td>ROOM TYPE</td>
                            <td>{props.selectedReservation.roomType}</td>
                        </tr>

                        </tbody>
                    </table>
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