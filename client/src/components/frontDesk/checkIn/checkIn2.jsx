import React, {useState, useEffect} from "react";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import { reservationData } from '../../../SampleData/sampleData.js'
import FormButton from "../../styledElements/FormButton.jsx";



let TitleTableCheckIn = () => {
  return (
    <table className="titleTableMini">
      <thead>
      <tr>
        <th>Reservation Number</th>
        <th>Guest Name</th>
        <th>Reservation Dates</th>
      </tr>
      </thead>
    </table>
  );
};

const ListEntryMini = ({reservation, addPage}) => {
  const [clicked, setClicked] = useState(false);
  const updateClicked = () => {
    setClicked((prevClicked) => !prevClicked)
  }

  if (clicked) {
    console.log('clicked')
  }

  return (
    <div 
    id="listEntryMini" 
    onClick={(e) => {
      updateClicked();
      addPage();
    }}>
      <span className="listEntryText"><EntryTableReservations reservation={reservation}/></span>
    </div>

  )

};

let EntryTableReservations = ({reservation}) => {

  let name = reservation.bookingGuest;
  let checkIn = reservation.checkIn;
  let checkOut = reservation.checkOut;
  let id = reservation._id


  return (
    <table className="entryTableMini">
      <tbody>
      <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th>{checkIn} - {checkOut}</th>
      </tr>
      </tbody>
    </table>
  );
}

const CheckInReservationList = (props) => {

  if (reservationData.length === 0) {
    return (
        <HalfRoundDiv
          margin="0 30px 0 30px"
          id="reservationOuterContainer"
        >
          <div id="reservationInnerContainer">
            <div id="listEntriesHeaderMini"><TitleTableCheckIn/></div>
                no results found
          </div>
          <FormButton className='searchButtonPlacement' onClick={props.addPage}> Back</FormButton>
        </HalfRoundDiv>
    );
  }

  return (

      <HalfRoundDiv
        margin="0 30px 0 30px"
        id="reservationOuterContainer"
      >
        <div id="reservationInnerContainer">
          <div id="listEntriesHeaderMini"><TitleTableCheckIn/></div>
          {reservationData.map((reservation) => {
            return <ListEntryMini reservation={reservation} addPage={props.addPage}/>
          })}
        </div>
      </HalfRoundDiv>

  );
};

export default CheckInReservationList;