import React from 'react';
import PropTypes from 'prop-types';
 
// eslint-disable-next-line react/prop-types
function NotesItemButton({ id, onDelete }) {
  return (
    <div className="notes-item-button__container">
        <button className="notes-item__button-delete" onClick={() => onDelete(id)}>Hapus</button>
    </div>
  ) 
  
}
NotesItemButton.propTypes = {
  id : PropTypes.number.isRequired,
  onDelete : PropTypes.func.isRequired,
};
export default NotesItemButton;