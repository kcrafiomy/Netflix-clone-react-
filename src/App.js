import React from 'react'
import NavBar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { actions,originals } from './url'

function App() {
  return (
    <div className="App">
        <NavBar showButtons={true} />
        <Banner/>
        <RowPost url = {originals} title='Netflix '/>
        <RowPost url = {actions} title='Actions' isSmall />
        <Banner isbanner />
    </div>
  );
}

export default App;
