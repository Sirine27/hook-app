
import React from 'react';
import { Rating } from '@material-ui/lab';
import {  Form, FormControl } from 'react-bootstrap';



const Filter = ({setFilterTitel, FilterRating, setFilterRating}) => {
    return (
        <div>
 <h1 style={{marginBottom:'20px'}}>Movie App</h1>

    <Form style={{marginBottom:'20px'}} className="d-flex">
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
 
        </div>
    )
}

export default Filter;