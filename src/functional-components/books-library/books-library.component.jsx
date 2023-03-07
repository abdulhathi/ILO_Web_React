import "./books-libarary.styles.scss";
import SearchBox from "./search-box/search-box.component";
import Card from "./card/card.component";
import { useState, useEffect } from "react";
import HeadingThree from "../../core-components/headings/heading-three/heading-three.component";

const BooksLibarary = () => {
  const [books, setBooks] = useState([]);
  const [searchKey, setSearchKey] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    fetch(
      "https://www.hadithapi.com/api/books?apiKey=$2y$10$Ve4RLhM8fsISmIuSRQhe8U5VfnEmUeeIGsyWbzZljIPA2Dfmytm"
    )
      .then((response) => response.json())
      .then((json) => {
        const currbooks = json.books;
        setBooks(currbooks);
      });
  }, []);

  useEffect(() => {
    const newFilteredBooks = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchKey)
    );
    setFilteredBooks(newFilteredBooks);
  }, [books, searchKey]);

  const onSearchChange = (event) => {
    const inputSearchKey = event.target.value.toLowerCase();
    setSearchKey(inputSearchKey);
  };

  return (
    <div className="library-container">
      <SearchBox onSearchHandler={onSearchChange}></SearchBox>
      <div className="card-container">
        {filteredBooks.length ? (
          filteredBooks.map((book) => <Card key={book.id} book={book}></Card>)
        ) : (
          <HeadingThree text="No valid books are found in this search"
          ></HeadingThree>
        )}
      </div>
    </div>
  );
};

export default BooksLibarary;
