import React, { useState, useEffect } from 'react';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';

import BigButton from '../../styledElements/BigButton.jsx';
import ModalTitle from '../../styledElements/ModalTitle.jsx';
import InputTypeText from '../../styledElements/InputTypeText.jsx';
import { colors } from '../../styledElements/styleGuid';

import AmenityList from './RoomsComponents/AmenityList.jsx';
import RoomTypeList from './RoomsComponents/RoomTypeList.jsx';

import {
  amenitiesData,
  roomTypeData
} from '../../../SampleData/AmenitiesRoomType.js';

const AddEditRooms = ({
  type,
  onClick1,
  onClick2
}) => {

  console.log('componentType', type);

  let aData = amenitiesData;
  let rData = roomTypeData;
  let queryPlaceHolderLeft = 'Choose Amenity';
  let queryPlaceHolderRight = 'Choose Type';

  const [searchQuery, setSearch] = useState('');
  const [roomFloor, setFloor] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setType] = useState('');

  const handleAddRooms = (roomTypeQuery) => {
    setType(roomTypeQuery);
  };

  return (
    <div id='roomContainer'>
      <div>
        <HalfRoundDiv
          id='roomEntriesContainer'
          margin='0 30px 0 30px'
          width='100vh - 60px'
          height='calc(100vh - 260px)'
        >
          <div>
            <ModalTitle>{
              type === 'ADD' ? 'ADD ROOM' : 'EDIT ROOM'}
            </ModalTitle>
          </div>

          <div id='roomBox_add'>
            <div className='roomTable'>
              <div id='roomInnerTable1'>
                <div>
                  <InputTypeText
                    minlength='80px'
                    maxlength='100px'
                    placeholder='floor#'
                    defaultValue='floor#'
                    value={value}
                    margin={margin}
                    onChange={onChange}
                    autocomplete={autocomplete}
                    width={width}
                    type='text'></InputTypeText>
                  <InputTypeText placeholder='room#'></InputTypeText>
                  {/* <FormButton margin='0 20px 0 0' onClick={(e) => onClick1(onClick1)}>
                    ADD
                  </FormButton> */}
                </div>
              </div>

              <div id='roomInnerTable2'>
                {rData.map((oneRoomType) => {
                  if (type === 'ADD') {
                    return (
                      <div>
                        <RoomTypeList
                          key={oneRoomType._id}
                          handleAddRooms={handleAddRooms}
                          listType={oneRoomType.roomType}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <div>
            <BigButton
              id='roomSubmitButton'
              backgroundColor={colors.berry}
              color='white'>SUBMIT</BigButton>
          </div>

        </HalfRoundDiv>
      </div>
    </div>
  );
};
export default AddEditRooms;