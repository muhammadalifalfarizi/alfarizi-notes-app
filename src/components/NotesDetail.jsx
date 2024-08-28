import React from 'react';
import PropTypes from 'prop-types';

function NotesDetail({ title, body, createdAt }) {
    const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',

  });
  return (
    <div>
     <h3 className="notes-item__title">{title}</h3>
     <p className="notes-item__date">{formattedDate}</p>
     <p className="notes-item__body">{body}</p>
    </div>
  );
}

NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NotesDetail;