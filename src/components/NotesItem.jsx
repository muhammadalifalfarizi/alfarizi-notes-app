import React from 'react';
import PropTypes from 'prop-types';

import NotesItemContent from './NotesItemContent';
import NotesItemButton from './NotesItemButton';
 
// eslint-disable-next-line react/prop-types
function NotesItem({ title, body, createdAt, id, onDelete }) {
 return (
   <div className="notes-item__container">
     <NotesItemContent title={title} createdAt={createdAt} body={body}  />
     <NotesItemButton id={id} onDelete={onDelete}/>
   </div>
 );
}

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesItem;