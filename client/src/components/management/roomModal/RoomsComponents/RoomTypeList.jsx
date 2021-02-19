import React from 'react';
// import BigButton from '../../../styledElements/BigButton.jsx';
// import { colors } from '../../../styledElements/styleGuid';

const RoomTypeList = ({ handleAddRooms, listType }) => {

  return (
    <div
      id ='setTypeButton'
      onClick={(e) => {
        handleAddRooms(listType);
      }}
    >
      <div id='room_H3'>{listType}</div>

    </div>
  );
};

export default RoomTypeList;