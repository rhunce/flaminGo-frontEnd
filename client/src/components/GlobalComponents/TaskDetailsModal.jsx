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
              Location: {this.props.allTaskData.location}
            </div>
            <div>
              Task Description: {this.props.allTaskData.taskDescription}
            </div>
            <div>
              Ticket Creator: {this.props.allTaskData.employeeCreated}
            </div>
            <div>
              Ticket Creation Date: {this.props.allTaskData.createdAt}
            </div>
            <div>
              Department: {this.props.allTaskData.department}
            </div>
            <div>
              Task Due Date: {this.props.allTaskData.dueBy}
            </div>
            <div>
              Task Completed: {this.props.allTaskData.isCompleted}
            </div>
            <div>
              Ticket Completion Date: {this.props.allTaskData.completedAt}
            </div>
            <div>
              Ticket Completed By: {this.props.allTaskData.employeeCompleted}
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


// "taskTitle": "Clean dirty spot",
// "roomNumber": "110",
// "location": "",
// "taskDescription": "Behind the nightstand on the right side of the bed. Don't ask me how a guest got that there.",
// "employeeCreated": "Jane Doe",
// "createdAt": "2021-02-13T13:44:00.000Z",
// "department": "Housekeeping",
// "dueBy": "2021-02-14T10:00:00.000Z",
// "isCompleted": true,
// "completedAt": "2021-02-13T16:15:00.000Z"
// "employeeCompleted": "John Smith",

// "task_id": "60108729ffefc9bae107564d",
// "room_id": "507c7f79bcf86cd7994f6c0e",