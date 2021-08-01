
import React from 'react';
import { Rating } from '@material-ui/lab';
import { Navbar, Form, FormControl } from 'react-bootstrap';



const Filter = ({setFilterTitel, FilterRating, setFilterRating}) => {
    return (
        <div>
 <Navbar>
 <Navbar.Brand href="#action">Movie App</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll"/>
  <Navbar.Collapse id="navbarScroll">

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setFilterTitel(e.target.value)}
      />
     
      <Rating name="read-only"
      value={FilterRating}
      onChange={(event,newValue)=>{
      setFilterRating(newValue);
      }
      }/>

    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Filter;