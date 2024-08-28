import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NotesItemContent({ id, title, body, createdAt }) {
  // Konversi createdAt ke format tanggal yang diinginkan
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',

  });
 return (
   <div className="notes-item__content">
     <h3 className="notes-item__title">
      <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
     <p className="notes-item__date">{formattedDate}</p>
     <p className="notes-item__body">{body}</p>
   </div>
 );
}
NotesItemContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}
 
export default NotesItemContent;