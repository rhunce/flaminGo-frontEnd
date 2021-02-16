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
    transform: 'translate(-50%, -50%)',
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
          // style={customStyles}
          isOpen={this.props.isOpen}
          contentLabel='Minimal Modal Example'
        >
          <h1>This is my modal!</h1>
          <FormButton onClick={this.props.toggle}>
            CLOSE DETAILS PAGE
          </FormButton>
        </Modal>
      </div>
    );
  }
}

export default RoomDetailsModal;