import "./card.styles.scss";
import QuranImage from "../../../assets/images/quran.png";

const card = (props) => {
  const { book } = props;
  return (
    <div className="card">
      <h3 className="card-heading">{book.bookName}</h3>
      <img className="card-image" src={QuranImage} alt="Book" />
      <p>{book.writerName}</p>
      <div className="card-details">
        <span>Chapters: {book.chapters_count}</span>
        <span>Hathees: {book.hadiths_count}</span>
      </div>
      <button className="card-btn btn btn--primary">Read More</button>
    </div>
  );
};

export default card;
