import React, { useState, useEffect } from "react";
import FormButton from '../styledElements/FormButton.jsx'
import RoomDetailsModal from './RoomDetailsModal';
import TaskDetailsModal from './TaskDetailsModal';


const ListEntry = ({ table, type, onClick1, onClick2, entity }) => {
  let entryButtons;

  const [rmModalStatus, setRmModalStatus] = useState(false);
  const [taskModalStatus, setTaskModalStatus] = useState(false);

  const toggleRoomDetailsModal = () => {
    if(rmModalStatus) {
      setRmModalStatus(false)
    } else {
      setRmModalStatus(true)
    }
  }

  const toggleTaskDetailsModal = () => {
    console.log('toggle task details modal');
    if(taskModalStatus) {
      setTaskModalStatus(false)
    } else {
      setTaskModalStatus(true)
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
  } else if (type === 'room') {
    entryButtons = (
      <span className='listEntryButtons'>
        <FormButton margin='0 30px 0 20px' onClick={toggleRoomDetailsModal}>
          See Details
        </FormButton>
        <RoomDetailsModal
          isOpen={rmModalStatus}
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
        <FormButton margin='0 30px 0 20px' onClick={toggleTaskDetailsModal}>
          See Details
        </FormButton>
        <FormButton margin='0 20px 0 0' onClick={() => onClick2(entity)}>
          Mark as Complete
        </FormButton>
        <TaskDetailsModal
          isOpen={taskModalStatus}
          toggle={toggleTaskDetailsModal}
          allTaskData={entity}
        />
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
