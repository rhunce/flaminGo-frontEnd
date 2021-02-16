import React, { useState, useEffect } from "react";
import FormButton from "../styledElements/FormButton.jsx";
import HalfRoundDiv from "../styledElements/HalfRoundDiv.jsx";
import ListEntry from "../GlobalComponents/ListEntry.jsx";
import {
  titleTableRooms,
  titleTableTasks,
  titleTableEmployees,
  titleTableGuests,
} from "./ListComponents/titleTables.jsx";
import {
  entryTableRooms,
  entryTableTasks,
  entryTableEmployees,
  entryTableGuests,
} from "./ListComponents/entryTables.jsx";
import {
  roomsData,
  employeeData,
  taskData,
  reservationData,
} from "../../SampleData/SampleData.js";

const ListMaster = ({ type, handleBackChange, handleBackgroundChange }) => {
  useEffect(() => {
    handleBackChange("black");
    handleBackgroundChange("listBgContainer");
  });

  let data, titleTable, searchParam;

  if (type === "room") {
    data = roomsData;
    titleTable = titleTableRooms();
    searchParam = "Search by room number";
  } else if (type === "employee") {
    data = employeeData;
    titleTable = titleTableEmployees();
    searchParam = "Search by employee name";
  } else if (type === "task") {
    data = taskData;
    titleTable = titleTableTasks();
    searchParam = "Search";
  } else if (type === "guest") {
    data = reservationData;
    titleTable = titleTableGuests();
    searchParam = "Search by guest name"
  }

  const [dropDownStatus, setDropDown] = useState("list1");

  var checkList = document.getElementById("dropDown");

  let handleFilterDropdown = (e) => {
    if (dropDownStatus === "list1") setDropDown("list1 visible");
    else setDropDown("list1");
  };

  return (
    <div id="listContainer">
      <div className="listHeader">
        <div className="listHeaderButtons">
          <div id="dropDown" className={dropDownStatus}>
            <FormButton
              className="filterAnchor"
              children="Filter"
              margin="0 30px 0 0"
              onClick={handleFilterDropdown}
            />
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
            <input type="text" placeholder={searchParam}></input>
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
              return <ListEntry table={entryTableRooms(entity)} type="room" />;
            } else if (type === "employee") {
              return <ListEntry table={entryTableEmployees(entity)} type="employee" />
            } else if (type === "task") {
              return <ListEntry table={entryTableTasks(entity)} type="task" />;
            } else if (type === "guest") {
              return <ListEntry table={entryTableGuests(entity)} type="guest" />;
            }
          })}
        </div>
      </HalfRoundDiv>
    </div>
  );
};

export default ListMaster;
