import * as React from 'react';
import * as ons from 'onsenui';
import { hot } from "react-hot-loader/root";
import { ModalInterface } from '../interface';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';


class BSModal extends React.Component<ModalInterface> {
  state = {
    show: false
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  };


  render() {
    const { title, message } = this.props;
    return (
      <>
        <p
          style={{ color: '#0076FF' }}
          onClick={this.handleShow}>
          {this.props.children} <em>(Modal)</em>
        </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalBody>{message}</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}


export default hot(BSModal);