import "./search-box.styles.scss";
import SearchTextAccent from "../../../core-components/Input/search-text-accent/search-text.accent.component";

const SearchBox = (props) => {
    const { onSearchHandler } = props;
    return (
      <SearchTextAccent onSearchHandler={onSearchHandler}></SearchTextAccent>
    );
};

export default SearchBox;

