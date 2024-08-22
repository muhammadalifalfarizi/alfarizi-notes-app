import React from 'react';
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
 
export default NotesItem;