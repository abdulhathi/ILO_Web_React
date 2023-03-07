import HeadingOne from "../core-components/headings/heading-one/heading-one.component";
import "./master.styles.scss";
import BooksLibrary from "../functional-components/books-library/books-library.component";

const Master = () => {
  return (
    <div className="app-container">
      {/* <Navbar></Navbar> */}
      <header className="app-header">
        <HeadingOne text="Functional Component"></HeadingOne>
      </header>
      <main className="main-container">
        <BooksLibrary></BooksLibrary>
      </main>
    </div>
  );
};

export default Master;
