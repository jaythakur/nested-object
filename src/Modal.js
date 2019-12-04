import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class Model extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Model.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[Model.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[Model.js] componentDidUpdate');
  }

  render() {
    console.log('[Model.js] render');
    return (
      <div className="App">
        <Modal show={this.props.show} onHide={this.props.openModalHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.openModalHandler}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.openModalHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
   
      </div>
    );
  }
  
}

export default Model;
