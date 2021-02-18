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
  }
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
              <span className="detailsTitle">Room Number:</span> {this.props.allRmData.roomNumber}
            </div>
            <div>
            <span className="detailsTitle"> Floor:</span> {this.props.allRmData.floorNumber}
            </div>
            <div>
            <span className="detailsTitle">Roomtype: </span> {this.props.allRmData.roomType}
            </div>
            <div>
            <span className="detailsTitle">Cleanliness Status:</span> {cleanStatus}
            </div>
            <div>
            <span className="detailsTitle">Occupation Status:</span> {occStatus}
            </div>
            <div>
            <span className="detailsTitle"> Amenities:</span> {amenArr}
            </div>
            <div>
            <span className="detailsTitle">Open Tasks:</span> {taskArr}
            </div>

          </div>
          <br/>
          <button className='closeRmDetails' onClick={this.props.toggle}>
            Close Details Page
          </button>
        </Modal>
      </div>
    );
  }
}

export default TaskDetailsModal;