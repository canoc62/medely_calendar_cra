import React from 'react';
import { Modal } from 'react-bootstrap';
import AddEventFormContainer from './../containers/AddEventFormContainer';

const AddEventOverlay = (props) => {
  return (
    <Modal show={props.showAddEventOverlay} onHide={props.close}>
      <AddEventFormContainer close={props.close}/>
    </Modal>
  );
}

export default AddEventOverlay;
