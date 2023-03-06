import { Component } from "react";
import SearchTextAccent from "../../../core-components/Input/search-text-accent/search-text.accent.component";
import "./books-search.styles.scss";

class BooksSearch extends Component {
  render() {
    const { onSearchHandler } = this.props;
    return (
      <SearchTextAccent onSearchHandler={onSearchHandler}></SearchTextAccent>
    );
  }
}
export default BooksSearch;
