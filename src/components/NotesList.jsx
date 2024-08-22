import React from 'react';
import NotesItem from './NotesItem';
 
// eslint-disable-next-line react/prop-types
function NotesList({ notes, onDelete }) {
 return (
   <div className="notes-list">
     {
       // eslint-disable-next-line react/prop-types
       notes.length > 0 ? (// eslint-disable-next-line react/prop-types
        notes.map((note) => (
        <NotesItem 
         key={note.id} 
         id={note.id}
         onDelete={onDelete}
         {...note} />
        ))
       ) : (
        <div className="empty-notes__container">
          <h3 className="empty-notes">Catatan Kosong</h3>
        </div>
        )
     }
   </div>
 );
}
 
export default NotesList;