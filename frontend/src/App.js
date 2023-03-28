import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/landing';
import ResponsiveAppBar from './components/navbar/navbar';
import Formd from './components/form/form';

function App() {
  return (<>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path={`/`} element={<Landing />} />
        <Route path={`/View`} element={<Landing />} />
        <Route path={`/Add`} element={<Formd />} />
      
        {/* <Route path={`/navbar`} element={<ResponsiveAppBar />} />*/}
        
      </Routes>
      </>);
}

export default App;