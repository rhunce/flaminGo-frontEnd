import React from 'react';
import Modal from 'react-modal';
import FormButton from '../styledElements/FormButton';
import XButton from '../styledElements/Xbutton';

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50%',
    height: '80%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: 'linear-gradient(135deg, #ff2063, #a91cff)',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'scroll'
  }
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
           <XButton onClick={this.props.toggle} color="white" />
           <div id="roomDetailsContainer">
          <h1 className='roomDetailsHeader'>Task Details</h1>
          <div className='roomDetails'>
          <div>
          <span className="detailsTitle">Task Title:</span> {this.props.allTaskData.taskTitle}
            </div>
            <div>
            <span className="detailsTitle">Room Number</span> (if applicable): {this.props.allTaskData.roomNumber}
            </div>
            <div>
            <span className="detailsTitle">Location (if applicable):</span>  {this.props.allTaskData.location}
            </div>
            <div>
            <span className="detailsTitle">Task Description:</span>  {this.props.allTaskData.taskDescription}
            </div>
            <div>
            <span className="detailsTitle">Task Creator:</span>  {this.props.allTaskData.employeeCreated}
            </div>
            <div>
            <span className="detailsTitle">Task Creation Date:</span>  {this.props.allTaskData.createdAt.substring(0, 10)}
            </div>
            <div>
            <span className="detailsTitle">Department:</span>  {this.props.allTaskData.department}
            </div>
            <div>
            <span className="detailsTitle">Task Due Date:</span>  {this.props.allTaskData.dueBy.substring(0, 10)}
            </div>
            <div>
            <span className="detailsTitle">Task Completed:</span>  {this.props.allTaskData.isCompleted ? 'True' : 'False'}
            </div>
            <div>
            <span className="detailsTitle">Task Completion Date:</span>  {this.props.allTaskData.completedAt.substring(0, 10)}
            </div>
            <div>
            <span className="detailsTitle">Task Completed By:</span>  {this.props.allTaskData.employeeCompleted}
            </div>
          </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RoomDetailsModal;


