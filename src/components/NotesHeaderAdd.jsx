import React from 'react';
import NavigationAdd from './NavigationAdd';

 
class NotesHeaderAdd extends React.Component {
 render() {
   return (
     <header className='note-header'>
       <h1>Notes App </h1>
     <NavigationAdd />

     </header>
   )
 }
}
 
export default NotesHeaderAdd;