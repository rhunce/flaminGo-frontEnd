import React, { useState, useEffect } from "react";
import FormButton from "../styledElements/FormButton.jsx";
import HalfRoundDiv from "../styledElements/HalfRoundDiv.jsx";
import ListEntry from "../GlobalComponents/ListEntry.jsx";
import { roomsData, employeeData, taskData } from "../../SampleData/SampleData.js";

const ListMaster = ({ type, handleBackChange, handleBackgroundChange }) => {

  useEffect(() => {
    handleBackChange("black");
    handleBackgroundChange("listBgContainer");
  } )

  let data;
  let titleTable;


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

  let titleTableEmployees = () => {
    return (
      <table className="titleTable">
        <tr>
          <th>Employee Name</th>
          <th>Position</th>
          <th>Hours Worked</th>
          <th>Wage</th>
        </tr>
      </table>
    )
  }

  let titleTableTasks = () => {
    return (
      <table className="titleTable">
        <tr>
          <th>Task Title</th>
          <th>Location</th>
          <th>Department</th>
        </tr>
      </table>
    )
  }

  if (type === "room") {
    data = roomsData;
    titleTable = titleTableRooms();
  } else if (type === "employee") {
    data = employeeData;
    titleTable = titleTableEmployees()
  } else if (type === "task") {
    data = taskData;
    titleTable = titleTableTasks();
  }

  let entryTableRooms = (roomNumber, roomType, occupied, cleaned) => {
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

  let entryTableEmployees = (firstName, lastName, position, hours, wage) => {
    return (
      <table className="entryTable">
        <tbody>
        <tr>
          <th>{firstName} {lastName}</th>
          <th>{position}</th>
          <th>{hours}</th>
          <th>{wage}</th>
        </tr>
        </tbody>
      </table>
    );
  }

  let entryTableTasks = (title, room, location, department) => {

    let setting;
    if (room === "") {
      setting = location;
    } else {
      setting = room
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
                Test
              </li>
              <li>
                <input type="checkbox" />
                Test
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
        <div id="listEntriesHeader">{titleTable}</div>
        <div id="listEntriesContainer">
          {data.map((entity) => {
            if (type === "room") {
              return (
                <ListEntry
                  table={entryTableRooms(
                    entity.roomNumber,
                    entity.roomType,
                    entity.isOccupied,
                    entity.isClean
                  )} type="room"
                />
              );
            } else if (type === "employee") {
              return ( <ListEntry
                table={entryTableEmployees(
                  entity.firstName,
                  entity.lastName,
                  entity.position,
                  entity.weekHours,
                  entity.wage
                )} type="employee"
              />)
            } else if (type === "task") {
              return ( <ListEntry
                table={entryTableTasks(
                  entity.taskTitle,
                  entity.roomNumber,
                  entity.location,
                  entity.department
                )} type="task"
              />)
            }
          })}
        </div>
      </HalfRoundDiv>
    </div>
  );
};

export default ListMaster;
