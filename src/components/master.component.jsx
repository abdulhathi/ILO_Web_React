import { Component } from "react";
import logo from "../assets/images/logo.svg";
import "./master.styles.scss";
import BooksLibrary from "./books-library/books-library.component";
import Header from "./header/header.component";
import Navbar from "./navbar/navbar.component";

class Master extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar></Navbar>
        <header className="app-header">
          <Header></Header>
        </header>
        <main className="main-container">
          <BooksLibrary></BooksLibrary>
        </main>
      </div>
    );
  }
}

export default Master;
