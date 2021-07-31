import React from 'react';

function Card({ imageLink, title, author, comments }) {
    return (
        <div className="card">
            <img src={imageLink} alt={title} />
            <h1 className="card__title">{title}</h1>
            <p className="card__author">{author.firstName} {author.lastName}</p>
            <p className="card__comment">{comments.length}</p>
        </div>
    )
}

export default Card;