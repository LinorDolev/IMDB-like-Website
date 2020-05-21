import React from 'react';
import {Popover, Whisper} from 'rsuite';
import './Movie.css';
  

const Movie = (props) => {
    const {movie} = props;
    const {title, image, category, rate} = movie;
    const info = (<Popover title={title}>
                    <p>Category: {category}</p>
                    <p>Rate: {rate}</p>
                  </Popover>);

    return (
        <div className='MovieContainer'>
            <Whisper trigger='hover' placement='right' speaker={info}>
                <h3 className='Centered MovieTitle'>{title}</h3>
            </Whisper>
            <Whisper trigger='click' placement='right' speaker={info}>
                <img src={image} alt={title} width={200} height={267}/>   
            </Whisper>
        </div>
    )
}
export default Movie;