import React from 'react';
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import movies from '../Data';
import YouTube from 'react-youtube'

const Description = (props) => {

    const movieId = Number(props.match.params.id);

    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
       
        <div style = {{backgroundColor: '#282c34', color:'white', textAlign: 'center', minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            
            <Link to="/"><Button>Go to Home Page</Button></Link>
            <h1>{movie[0].name}</h1>
            <h6>{movie[0].description}</h6>
            <YouTube videoId={movie[0].Trailer}/>
            
        </div>
        );

}

export default  Description ;