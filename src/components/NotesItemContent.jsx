import React from 'react';
 
// eslint-disable-next-line react/prop-types
function NotesItemContent({ title, body, createdAt }) {
  // Konversi createdAt ke format tanggal yang diinginkan
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',

  });
 return (
   <div className="notes-item__content">
     <h3 className="notes-item__title">{title}</h3>
     <p className="notes-item__date">{formattedDate}</p>
     <p className="notes-item__body">{body}</p>
   </div>
 );
}
 
export default NotesItemContent;