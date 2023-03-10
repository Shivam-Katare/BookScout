import React from 'react';
import ThreeD from '../3DCover/ThreeD';
import ReadNow from '../ReadNow/ReadNow';
import './BookCard.css';

function BookCard(props) {
  return (
    <div className="fond">
      <span className="s1">Book</span>
      <span className="s2">Scout</span>

      <div className="book-card">
        <div className="thumbnail">
          <ThreeD image={props.image} info={props.info} />
        </div>

        <div className="title-right">
          <h1 className="book-title">{props.title}</h1>

          <div className="book-author">
            <h2 className="author-name">{props.author}</h2>
          </div>

          <div className="separator"></div>

          <div style={{ maxHeight: "239px", overflowY: "scroll" }}>
            <p className="book-desc">{props.description}</p>
          </div>

          <h5 className="release-date">{props.pageCount}</h5>
          <h6 className="release-month">PAGES</h6>

          <p className='book-price'>{props.price}</p>

          <span className='isEbook'>{props.isEbook}</span>

          <a href={props.previewLink} target="_blank" className='preview-link'>
            <button className='book-preview'>Preview Now!</button>
          </a>
          <ReadNow info={props.info} />
        </div>
      </div>
    </div>
  );
}


export default BookCard;
