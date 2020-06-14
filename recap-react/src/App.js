import React from 'react';
import './App.css';
import BookList from './components/BookList';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
      <BookList text="My Book Store!!!" />
      
      </Container>
    </div>
  );
}

export default App;
