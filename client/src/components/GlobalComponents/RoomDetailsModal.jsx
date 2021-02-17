import React from 'react';
import Modal from 'react-modal';
import FormButton from '../styledElements/FormButton'

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '70%',
    height: '70%',
    transform: 'translate(-50%, -50%)',
    border: '5px #ff2063 solid'
  },
};

class TaskDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {

    var amenArr = this.props.allRmData.amenities.map((amen) => (
        <li>
          {amen}
        </li>
      ))

    var taskArr = this.props.allRmData.tasks.map((task) => (
      <li>
        {task.taskTitle}
      </li>
    ))

    const cleanStatus = this.props.allRmData.isClean ? 'Clean' : 'Dirty';
    const occStatus = this.props.allRmData.isOccupied ? 'Occupied' : 'Vacant';

    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          contentLabel='Minimal Modal Example'
        >
          <h1 className='roomDetailsHeader'>Room Details</h1>
          <div className='roomDetails'>
            <div>
              Room Number: {this.props.allRmData.roomNumber}
            </div>
            <div>
              Floor: {this.props.allRmData.floorNumber}
            </div>
            <div>
              Roomtype: {this.props.allRmData.roomType}
            </div>
            <div>
              Cleanliness Status: {cleanStatus}
            </div>
            <div>
              Occupation Status: {occStatus}
            </div>
            <div>
              Amenities: {amenArr}
            </div>
            <div>
              Open Tasks: {taskArr}
            </div>

          </div>
          <button className='closeRmDetails' onClick={this.props.toggle}>
            Close Details Page
          </button>
        </Modal>
      </div>
    );
  }
}

export default TaskDetailsModal;