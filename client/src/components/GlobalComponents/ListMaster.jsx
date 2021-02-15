import React, { useState, useEffect } from "react";
import FormButton from "../styledElements/FormButton.jsx";
import HalfRoundDiv from "../styledElements/HalfRoundDiv.jsx";
import ListEntry from "../GlobalComponents/ListEntry.jsx";
import { roomsData } from "../../SampleData/Rooms.js";

const ListMaster = ({ type, handleBackChange, handleBackgroundChange }) => {

  useEffect(() => {
    handleBackChange("black");
    handleBackgroundChange("listBgContainer");
  } )

  if (type === "room") {
    console.log(roomsData);
  }

  let titleTableRooms = () => {
    return (
      <table className="titleTable">
        <tr>
          <th>Room Number</th>
          <th>Room Type</th>
          <th>Occupation Status</th>
          <th>Cleanliness Status</th>
        </tr>
      </table>
    );
  };

  let entryTable = (roomNumber, roomType, occupied, cleaned) => {
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
        <tr>
          <th>{roomNumber}</th>
          <th>{roomType}</th>
          <th>{occupStatus}</th>
          <th>{cleanStatus}</th>
        </tr>
      </table>
    );
  };

  const [dropDownStatus, setDropDown] = useState("list1")

  var checkList = document.getElementById("dropDown");

  let handleFilterDropdown = (e) => {
    if (dropDownStatus === "list1")
      setDropDown("list1 visible")
    else setDropDown("list1")
  };

  return (
    <div id="listContainer">
      <div className="listHeader">
        <div className="listHeaderButtons">
          <div id="dropDown" className={dropDownStatus}>
            <FormButton className="filterAnchor" children="Filter" margin="0 30px 0 0" onClick={handleFilterDropdown} />
            <ul className="items">
              <li>
                <input type="checkbox" />
                Vacant
              </li>
              <li>
                <input type="checkbox" />
                Cleaned
              </li>
            </ul>
          </div>
          <FormButton children="Sort By" />
          <div className="listHeaderSearch">
            <input type="text" placeholder="Search for something"></input>
            <img src="/search.svg" height="20px"></img>
          </div>
        </div>
      </div>
      <HalfRoundDiv
        gradients={true}
        margin="0 30px 0 30px"
        width="100vh - 60px"
        height="calc(100vh - 260px)"
      >
        <div id="listEntriesHeader">{titleTableRooms()}</div>
        <div id="listEntriesContainer">
          {roomsData.map((room) => {
            return (
              <ListEntry
                table={entryTable(
                  room.roomNumber,
                  room.roomType,
                  room.isOccupied,
                  room.isClean
                )}
              />
            );
          })}
        </div>
      </HalfRoundDiv>
    </div>
  );
};

export default ListMaster;
