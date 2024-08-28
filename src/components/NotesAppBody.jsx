import React from 'react';
import PropTypes from 'prop-types';
import NotesList from './NotesList';
import { getNotes } from '../utils/data';
import NotesInput from './NotesInput';

class NotesAppBody extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getNotes(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }
 onAddNotesHandler({ title, body, }) {
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