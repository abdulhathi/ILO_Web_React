import { Component } from 'react';
import logo from './logo.svg';
import './App.styles.scss'
import BooksLibrary from './components/books-library/books-library.component'
import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component';

class App extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  render() {
    return (
      <div className='app-container'>
        <Navbar></Navbar>
        <header className='app-header'>
          {/* <h1 className='h1--primary'>Islamic Books Library</h1> */}
          <Header></Header>
        </header>
        <main className='main-container'>
          <BooksLibrary></BooksLibrary>
        </main>
      </div>
    );
  }
}

export default App;
