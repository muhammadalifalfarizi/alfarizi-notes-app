import React from 'react';
import { addNotes } from '../src/utils/data';
import NotesInput from '../src/components/NotesInput';
import NotesHeaderHome from '../src/components/NotesHeaderHome';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  function onAddNotesHandler(note) {
    addNotes(note);
    navigate('/');
  }
 
  return (
    <div className="notes-app">
        <NotesHeaderHome></NotesHeaderHome>
     <main>
        <section className='notes-app-body'>
            <NotesInput addNotes={onAddNotesHandler} />
        </section>
      </main>
   </div>
  )
}

 
export default AddPage;