import React from "react";

let entryTableRooms = (entity) => {

  let roomNumber = entity.roomNumber;
  let roomType = entity.roomType;
  let occupied = entity.isOccupied;
  let cleaned = entity.isClean


  let occupStatus, cleanStatus;

  if (occupied) {
    occupStatus = "Occupied";
  } else {
    occupStatus = "Vacant";
  }

  if (cleaned) {
    cleanStatus = "Cleaned";
  } else {
    cleanStatus = "Dirty";
  }

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{roomNumber}</th>
        <th>{roomType}</th>
        <th>{occupStatus}</th>
        <th>{cleanStatus}</th>
      </tr>
      </tbody>
    </table>
  );
};

let entryTableEmployees = (entity) => {

  let name = `${entity.firstName} ${entity.lastName}`;
  let position = entity.position;
  let hours = entity.weekHours;
  let wage = entity.wage;

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{name}</th>
        <th>{position}</th>
        <th>{hours}</th>
        <th>{wage}</th>
      </tr>
      </tbody>
    </table>
  );
}

let entryTableTasks = (entity) => {

  let title = entity.taskTitle;
  let department = entity.department;

  let setting;
  if (entity.roomNumber === "") {
    setting = entity.location;
  } else {
    setting = `Room ${entity.roomNumber}`
  }

  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{title}</th>
        <th>{setting}</th>
        <th>{department}</th>
      </tr>
      </tbody>
    </table>
  );
}

let entryTableGuests = (entity) => {

  let name = entity.bookingGuest;
  let room = entity.roomNumber;
  let checkIn = entity.checkIn;
  let checkOut = entity.checkOut;


  return (
    <table className="entryTable">
      <tbody>
      <tr>
        <th>{name}</th>
        <th>{room}</th>
        <th>{checkIn}</th>
        <th>{checkOut}</th>
      </tr>
      </tbody>
    </table>
  );
}

export {
  entryTableRooms,
  entryTableEmployees,
  entryTableTasks,
  entryTableGuests
}