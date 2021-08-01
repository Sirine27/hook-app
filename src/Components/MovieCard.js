import React from 'react';
import {Card} from 'react-bootstrap';
import {Rating} from '@material-ui/lab';





export const MovieCard = ({movie}) => {

           return (
            <div>
 <Card style={{marginLeft:'41px', marginBottom:'20px', backgroundColor:'#282c34', height:'470px', width: '290px' }}>
  <Card.Img variant="top" style={{ width:'auto', height:'40%'}} src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>{movie.date}</Card.Text>
    <Card.Text>{movie.description}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>
  </Card.Body>
</Card>   
            </div>
        )
    
}
