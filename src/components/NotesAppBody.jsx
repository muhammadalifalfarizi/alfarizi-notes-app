import React from 'react';
import NotesList from './NotesList';
import { getData } from '../utils/data';
import NotesInput from './NotesInput';

class NotesAppBody extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }
 onAddNotesHandler({ title, body }) {
   this.setState((prevState) => {
     return {
       notes: [
         ...prevState.notes,
         {
           id: +new Date(),
           title,
           body,
           archived: false,
           createdAt: new Date().toISOString(),
         }
       ]
     }
   });
 }

 onSearchHandler(event){
  this.setState({ searchquery: event.target.value}); // Update search query
 }

 render() {
   return (
     <div className="notes-app-body">
       <NotesInput addNotes={this.onAddNotesHandler}/>
       <h1>Daftar Catatan</h1>
       <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
     </div>
   );
 }
}
 
export default NotesAppBody;