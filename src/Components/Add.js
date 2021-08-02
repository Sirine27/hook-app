import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';


const AddModal = ({movies, setMovies}) => {
   
    const [addTitle, setAddTitle] = useState("");
    const [addDate, setAddDate] = useState("");
    const [addImage, setAddImage] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addType, setAddType] = useState("");
    const [addRating, setAddRating] = useState(0);
    const [show, setShow] = useState(false);

const handleShow = () => {
    setShow(!show);
}
const handleAlert =() =>{
    alert ("congratulations, you've added a new movie ... check below 🙂");
}

    return(
        <div>
            <Button style={{float:'left'}} variant="light" onClick={handleShow}>Add Movie</Button>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header >
                    <Modal.Title> Add new Movie</Modal.Title>
                </Modal.Header>
                
  <Modal.Body>
      <div>
          <label className="input">Title: </label>
          <input type="text" name="name" onChange = {(event) =>
    setAddTitle(event.target.value)} />
      </div>
      <div>
          <label className="input">Date: </label>
          <input type="text" name="date" onChange = {(event) =>
    setAddDate(event.target.value)} />
      </div>
      <div>
          <label className="input">Image: </label>
          <input type="text" name="image" onChange = {(event) =>
    setAddImage(event.target.value)} />
      </div>
      <div>
          <label className="input">Discription: </label>
          <input type="text" name="discription" onChange = {(event) =>
    setAddDescription(event.target.value)} />
      </div>
      <div>
          <label className="input">Type: </label>
          <input type="text" name="type" onChange ={(event) =>
    setAddType(event.target.value)} />
      </div>
      <div>
          <label className="input">Rating: </label>
          <input type="text" name="rating" onChange = {(event) =>
    setAddRating(event.target.value)} />
      </div>
  </Modal.Body>
  
  <Modal.Footer>


    <Button variant="outline-primary" onClick={(e) =>{
                    e.preventDefault()
                    setMovies([...movies,
                    {
                        id: Math.random(),
                        name: addTitle,
                        date: addDate,
                        image: addImage,
                        description: addDescription, 
                        type: addType,
                        rating: addRating 
                    }
                    ]);
                    handleAlert ()
                    handleShow ()

                } 
                    }
                   
                    >Add Movie</Button>
  </Modal.Footer>
            </Modal>


        </div>
    )
}

 

export default AddModal;