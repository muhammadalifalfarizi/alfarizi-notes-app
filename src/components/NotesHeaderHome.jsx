import React from 'react';
import NavigationHome from './NavigationHome';

 
class NotesHeaderHome extends React.Component {
 render() {
   return (
     <header className='note-header'>
       <h1>Alfarizi Notes App</h1>
     <NavigationHome />
     
     </header>
   )
 }
}
 
export default NotesHeaderHome;