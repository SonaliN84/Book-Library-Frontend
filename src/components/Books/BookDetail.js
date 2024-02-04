import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./BookDetails.module.css";
import moment from "moment";

const BookDetail = () => {
  const params = useParams();
  console.log(params);
  const books = useSelector((state) => state.book.books);

  const book = books.find((item) => item.id == params.bookId);
  console.log(book);

  return (
    <div className={styles["book-detail-box"]}>
      <img src={book.image} className={styles["book-detail-image"]} />
      <div className={styles["book-detail-data"]}>
        <b>Title : </b>
        <span className="mx-1">{book.title}</span>
      </div>
      <div className={styles["book-detail-data"]}>
        <b>Author : </b>
        <span className="mx-1">{book.author}</span>
      </div>
      <div className={styles["book-detail-data"]}>
        <b>Launched on : </b>
        <span className="mx-1">{moment(book.launched).format("LL")}</span>
      </div>
      <div className={styles["book-detail-data"]}>
        <b>Rating : </b>
        <span className="mx-1">{book.rating}</span>
      </div>
      <div className={styles["book-detail-data"]}>{book.description}</div>
      <button className={styles["submit-button"]}>Request book</button>
    </div>
  );
};
export default BookDetail;
