import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import AddPage from '../AddPage';
import DetailPageWrapper from '../DetailPage';
 
function NotesApp() {
 return (
   <div className="notes-app">
     <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />

        </Routes>
      </main>
   </div>
 );
}
 
export default NotesApp;