import React from 'react';

const RoomTypeList = ({ handleAddRooms, listType }) => {
  // console.log(' onClick,:', handleAddRooms, listType, entity, type);

  return (
    <div
      id ='setTypeButton'
      onClick={(e) => {
        handleAddRooms(listType);
      }}
    >
      <h3 id='room_H3'>{listType}</h3>
    </div>
  );
};

export default RoomTypeList;