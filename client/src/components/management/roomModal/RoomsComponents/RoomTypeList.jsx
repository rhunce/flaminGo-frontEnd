import React from 'react';

const RoomTypeList = ({ onClick1, listType, entity, type }) => {
  console.log(' onClick1,:', onClick1, listType, entity, type);

  return (
    <div id='roomEntry' onClick1={(e) => onClick1(onClick1)}>
      <span className='roomEntryText'>{listType}</span>
    </div>
  );
};

export default RoomTypeList;