import React, { useState, useEffect } from 'react';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';

import BigButton from '../../styledElements/BigButton.jsx';
import ModalTitle from '../../styledElements/ModalTitle.jsx';
import InputTypeText from '../../styledElements/InputTypeText.jsx';


import AmenityList from './RoomsComponents/AmenityList.jsx';
import RoomTypeList from './RoomsComponents/RoomTypeList.jsx';

import {
  AddHeader,
  EditHeader
} from './RoomsComponents/HeaderRooms.jsx';
// import {
//   AddTables,
//   EditTables
// } from '../RoomsComponents/AddEditRooms.jsx';
import {
  amenitiesData,
  roomTypeData
} from '../../../SampleData/AmenitiesRoomType.js';

const AddEditRooms = ({
  type,
  handleBackChange,
  handleBackgroundChange,
  onClick1,
  onClick2
}) => {

  useEffect(() => {
    handleBackChange('black');
    handleBackgroundChange('listBgContainer');
  });

  console.log('componentType', type);

  let aData; let rData; let titleHeader; let queryPlaceHolderLeft; let queryPlaceHolderRight;

  if (type === 'ADD') {
    aData = amenitiesData;
    rData = roomTypeData;
    titleHeader = AddHeader();
    queryPlaceHolderLeft = 'New Amenity';
    queryPlaceHolderRight = 'New Type';
  } else if (type === 'EDIT') {
    aData = amenitiesData;
    rData = roomTypeData;
    titleHeader = DeleteHeader();
    queryPlaceHolderLeft = 'Choose Amenity';
    queryPlaceHolderRight = 'Choose Type';
  }

  const [searchQuery, setSearch] = useState('');
  const handleSearch = (e) => {
    let query = document.getElementById('searchBar').value;
    setSearch(query);
  };

  // <button onClick={handleSearch}>Submit</button>

  // <div className='listHeader'></div>
  // <div className='listHeaderButtons'></div>
  // <div className='listHeaderSearch'>
  //   <input type='text' placeholder={searchParam}></input>
  // </div>;

  //   <FormButton margin='0 20px 0 0' onClick1={(e) => onClick1(onClick1)}>
  //   ADD
  // </FormButton>

  return (
    <div id='listContainer'>
      <HalfRoundDiv
        gradients={true}
        margin='0 30px 0 30px'
        width='100vh - 60px'
        height='calc(100vh - 260px)'
      >
        <div>{type === 'ADD' ? AddHeader : EditHeader}</div>
        <div id='roomEntriesContainer'>
          <HalfRoundDiv
            gradients={false}
            margin='0 30px 0 30px'
            width='100vh - 60px'
            height='calc(100vh - 260px)'
          >
          </HalfRoundDiv>
        </div>

        <div><BigButton>HI</BigButton></div>
        <div><ModalTitle>HI2</ModalTitle></div>
        <div><InputTypeText>for floor num, room num</InputTypeText></div>




        <div>
          {aData.map((oneAmenity) => {
            console.log('oneAmenity:', oneAmenity);
            if (type === 'ADD') {
              return (
                <div>
                  <AmenityList
                    key={oneAmenity._id}
                    onClick1={onClick1}
                    onClick2={onClick2}
                    entity={oneAmenity}
                    listType={oneAmenity.amenity}
                    type='ADD'
                  />
                </div>
              );
            } else if (type === 'EDIT') {
              return (
                <>EDIT</>
              );
            }
          })}
          {rData.map((oneRoomType) => {
            console.log('oneRoomType:', oneRoomType);
            if (type === 'ADD') {
              return (
                <div>

                  <RoomTypeList
                    key={oneRoomType._id}
                    onClick1={onClick1}
                    onClick2={onClick2}
                    entity={oneRoomType}
                    listType={oneRoomType.roomType}
                    type='ADD'
                  />

                </div>
              );
            } else if (type === 'EDIT') {
              return (
                <>EDIT</>
              );
            }
          })}
        </div>
        <FormButton margin='0 20px 0 0' onClick1={(e) => onClick1(onClick1)}>
          SUBMIT
        </FormButton>

      </HalfRoundDiv>
    </div>
  );
};
export default AddEditRooms;