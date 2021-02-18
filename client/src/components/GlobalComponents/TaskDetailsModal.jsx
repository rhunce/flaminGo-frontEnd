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

class RoomDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          contentLabel='Minimal Modal Example'
        >
          <h1 className='roomDetailsHeader'>Task Details</h1>
          <div className='roomDetails'>
          <div>
              Task Title: {this.props.allTaskData.taskTitle}
            </div>
            <div>
              Room Number (if applicable): {this.props.allTaskData.roomNumber}
            </div>
            <div>
              Location (if applicable): {this.props.allTaskData.location}
            </div>
            <div>
              Task Description: {this.props.allTaskData.taskDescription}
            </div>
            <div>
              Task Creator: {this.props.allTaskData.employeeCreated}
            </div>
            <div>
              Task Creation Date: {this.props.allTaskData.createdAt.substring(0, 10)}
            </div>
            <div>
              Department: {this.props.allTaskData.department}
            </div>
            <div>
              Task Due Date: {this.props.allTaskData.dueBy.substring(0, 10)}
            </div>
            <div>
              Task Completed: {this.props.allTaskData.isCompleted ? 'True' : 'False'}
            </div>
            <div>
              Task Completion Date: {this.props.allTaskData.completedAt.substring(0, 10)}
            </div>
            <div>
              Task Completed By: {this.props.allTaskData.employeeCompleted}
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

export default RoomDetailsModal;


