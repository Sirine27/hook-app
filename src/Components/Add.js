import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';


class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

handleShow = () => {
    this.setState({ show: !this.state.show});
};
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
};
render() {
    return(
        <div>
            <Button style={{float:'left'}} variant="primary" onClick={this.handleShow}>Add Movie</Button>
            <Modal show={this.state.show} onHide={this.handleShow}>
                <Modal.Header >
                    <Modal.Title>Add new Movie</Modal.Title>
                </Modal.Header>
                
  <Modal.Body>
      <div>
          <label className="input">Title</label>
          <input type="text" name="name" onChange = {this.handleChange}/>
      </div>
      <div>
          <label className="input">date</label>
          <input type="text" name="date" onChange = {this.handleChange}/>
      </div>
      <div>
          <label className="input">image</label>
          <input type="text" name="image" onChange = {this.handleChange}/>
      </div>
      <div>
          <label className="input">discription</label>
          <input type="text" name="discription" onChange = {this.handleChange}/>
      </div>
      <div>
          <label className="input">type</label>
          <input type="text" name="type" onChange = {this.handleChange}/>
      </div>
      <div>
          <label className="input">rating</label>
          <input type="text" name="rating" onChange = {this.handleChange}/>
      </div>
  </Modal.Body>
  
  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleShow}>Close</Button>
    <Button variant="primary">Add Movie</Button>
  </Modal.Footer>
            </Modal>


        </div>
    )
}
}
 

export default AddModal;