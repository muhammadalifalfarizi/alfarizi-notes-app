import React from 'react';
 
class NotesInput extends React.Component {
    constructor(props) {
    super(props);
 
   // inisialisasi state
   this.state = {
     title: '',
     body: '',
   }
 
   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 onTitleChangeEventHandler(event) {
   this.setState(() => {
     return {
       title: event.target.value,
     }
   });
 }
 
 onBodyChangeEventHandler(event) {
   this.setState(() => {
     return {
       body: event.target.value,
     }
   });
 }
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addNotes(this.state);
 }
 render() {
   return (
    <div className="notes-input">
     <h2>Tulis Catatan</h2>
     <form className="notes-input__form" onSubmit={this.onSubmitEventHandler}>
       <input className="notes-input__title" type="text" placeholder="Tulis judul catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
       <textarea className="notes-input__textarea" type="text" placeholder="Tulis catatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
       <button type="submit">Tambah Catatan</button>
     </form>
    </div>
   )
 }
}
 
export default NotesInput;