import React from "react";
import HalfRoundDiv from "../styledElements/HalfRoundDiv.jsx";
import { reservationData } from '../../SampleData/SampleData.js'


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

const ListEntryMini = ({reservation}) => {

  return (
    <div id="listEntryMini">
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

const CheckInReservationList = () => {



  return (

      <HalfRoundDiv
        margin="0 30px 0 30px"
        id="reservationOuterContainer"
      >
        <div id="reservationInnerContainer">
          <div id="listEntriesHeaderMini"><TitleTableCheckIn/></div>
          {reservationData.map((reservation) => {
            return <ListEntryMini reservation={reservation}/>
          })}
        </div>
      </HalfRoundDiv>

  );
};

export default CheckInReservationList;