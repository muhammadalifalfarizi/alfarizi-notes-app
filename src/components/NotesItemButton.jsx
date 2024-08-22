import React from 'react';
 
// eslint-disable-next-line react/prop-types
function NotesItemButton({ id, onDelete }) {
  return (
    <div className="notes-item-button__container">
        <button className="notes-item__button-delete" onClick={() => onDelete(id)}>Hapus</button>
    </div>
  ) 
  
}
export default NotesItemButton;