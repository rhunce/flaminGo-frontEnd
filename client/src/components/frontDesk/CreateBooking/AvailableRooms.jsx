import React from "react";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import ListEntry from './ListEntry.jsx';
import FlexCenterContainer from '../../landingPage/FlexCenterContainer.jsx';

let AvailableRooms = (props) => {
  return (
    <FlexCenterContainer>
      <HalfRoundDiv id={'listContainer'}>
        {props.availableRooms.map((room) => {
          return (
            <ListEntry
              id="roomListEntry"
              onClick1={(event) => {
                props.goToNext(event);
                props.selectRoom(event);
              }}
              table={room}
            />)})}
      </HalfRoundDiv>
    </FlexCenterContainer>
  );
};

export default AvailableRooms;
