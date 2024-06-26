import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Repo from './components/Repo';

const App = () => {
    return (
      <div className='App'>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/repos/:username" element={<Repo />} />
        </Routes>
      </div>
    );
};

export default App;
