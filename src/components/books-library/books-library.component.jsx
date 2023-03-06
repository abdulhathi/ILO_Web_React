import { Component } from "react";
import "./books-library.styles.scss";
import BooksCard from "./books-card/books-card.component";
import BooksSearch from "./books-search/books-search.component";
import HeaderThree from "../../core-components/headings/heading-three/heading-three.component";

class BooksLibrary extends Component {
  constructor() {
    super();
    this.state = { books: [], searchValue: "" };
  }
  componentDidMount() {
    fetch(
      "https://www.hadithapi.com/api/books?apiKey=$2y$10$Ve4RLhM8fsISmIuSRQhe8U5VfnEmUeeIGsyWbzZljIPA2Dfmytm"
    )
      .then((response) => response.json())
      .then((json) =>
        this.setState(
          () => {
            return { books: json.books };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchValue };
    });
  };
  render() {
    const { books, searchValue } = this.state;
    // console.log(searchValue);
    const filteredBooks = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchValue)
    );
    return (
      <div className="library-container">
        <BooksSearch onSearchHandler={this.onSearchChange}></BooksSearch>
        <div className="card-container">
          {
            // else {
            filteredBooks.length ? (
              filteredBooks.map((book) => {
                return <BooksCard key={book.id} book={book}></BooksCard>;
              })
            ) : (
              <HeaderThree text="No valid books are available in this search !!!"></HeaderThree>
            )
            // }
          }
        </div>
      </div>
    );
  }
}

export default BooksLibrary;
