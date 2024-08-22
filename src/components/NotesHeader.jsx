import React from 'react';
 
class NotesHeader extends React.Component {
 render() {
   return (
     <header className='notes-header'>
       <h1>Alfarizi&apos;s Notes</h1>
       <input
        type='text'
        placeholder='Cari Catatan'
        onChange={this.props.onSearch}
        className='notes-search-input'       
       />
     </header>
   )
 }
}
 
export default NotesHeader;