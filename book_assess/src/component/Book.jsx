import React from 'react';

const Book = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <img src={props.img} alt={ `book by${props.name}`}/>
            <p>{props.title}</p>
        </div>
    )
}
export default Book