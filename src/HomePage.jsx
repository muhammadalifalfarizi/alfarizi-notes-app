import React from 'react';
import NotesList from '../src/components/NotesList';
import { deleteNotes, getNotes } from '../src/utils/data';
import NotesHeaderAdd from '../src/components/NotesHeaderAdd';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
    };
  }

  onDeleteHandler = (id) => {
    deleteNotes(id);

    // Update the note state from data.js
    this.setState({
      notes: getNotes(),
    });
  };

  render() {
    return (
      <div className="notes-app">
        <NotesHeaderAdd />
        <section className="notes-app-body">
          <h1>Daftar Catatan</h1>
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </section>
      </div>
    );
  }
}

export default HomePage;
