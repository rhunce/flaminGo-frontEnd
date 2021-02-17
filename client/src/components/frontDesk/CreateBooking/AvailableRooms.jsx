import React from "react";
import { roomsData } from "../../../SampleData/sampleData.js";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import FormButton from '../../styledElements/FormButton.jsx';

let AvailableRooms = (props) => {
  return (
    <HalfRoundDiv>
      {roomsData.map((room) => {
        if (!room.isOccupied) {
          return <div id="listEntry">
            {room.roomNumber}
            <FormButton onClick={props.goToNext} id={'roomList'}>
              Select Room
            </FormButton>
          </div>
        }
      })}
    </HalfRoundDiv>
  );
};

export default AvailableRooms;
