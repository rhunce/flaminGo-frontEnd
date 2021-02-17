import React, { useState, useEffect, useContext } from "react";
import FormButton from '../styledElements/FormButton.jsx'
import RoomDetailsModal from './RoomDetailsModal';
import { MainContext } from '../landingPage/MainContext';



const ListEntry = ({ table, type, onClick1, onClick2, entity }) => {

  let entryButtons;

  const { position } = useContext(MainContext);

  const [modalStatus, setModalStatus] = useState(false);

  const toggleRoomDetailsModal = () => {
    console.log('toggle');
    if(modalStatus) {
      setModalStatus(false)
    } else {
      setModalStatus(true)
    }
  }
  if (type === 'employee') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={() => onClick1(entity)}>
          See Details
        </FormButton>
        <FormButton onClick={() => onClick2(entity)} margin='0 20px 0 0'>
          Remove
        </FormButton>
      </span>
    );
  } else if (type === 'room' && position === 'management') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 30px' onClick={toggleRoomDetailsModal}>
          See Details
        </FormButton>
        <FormButton margin='0 30px 0 0' onClick={onClick2}>
          Edit Room
        </FormButton>
        <RoomDetailsModal
          isOpen={modalStatus}
          toggle={toggleRoomDetailsModal}
          allRmData={entity}
        />
      </span>
    );
  }
  else if (type === 'room') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={toggleRoomDetailsModal}>
          See Details
        </FormButton>
        <RoomDetailsModal
          isOpen={modalStatus}
          toggle={toggleRoomDetailsModal}
          allRmData={entity}
        />
      </span>
    );
  } else if (type === 'guest') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={() => onClick1(entity)}>
          See Details
        </FormButton>
      </span>
    );
  } else if (type === 'task') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={() => onClick1(entity)}>
          See Details
        </FormButton>
        <FormButton margin='0 20px 0 0' onClick={() => onClick2(entity)}>
          Mark as Complete
        </FormButton>
      </span>
    );
  }

  return (
    <div id='listEntry'>
      <span className='listEntryText'>{table}</span>
      {entryButtons}
    </div>
  );
};

export default ListEntry;
