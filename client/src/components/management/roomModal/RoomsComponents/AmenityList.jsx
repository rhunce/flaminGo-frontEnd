import React from 'react';

const AmenityList = ({ onClick1, listType, entity, type }) => {
  console.log(' onClick1,:', onClick1, listType, entity, type);

  return (
    <div id='roomEntry' onClick1={(e) => onClick1(onClick1)}>
      <h3 id='room_H3'>{listType}</h3>
    </div>
  );
};

export default AmenityList;
