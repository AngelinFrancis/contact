import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage';
import ContactDetail from './ContactDetail';

const App = () => {
  const [ contacts, setContacts ] = useState([]);

  const setData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setContacts(response.data);
  }

  useEffect(() => {
    setData();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactPage contacts={contacts}/>}/>
        <Route path='/:id' element={<ContactDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
