import styles from "./BookRequests.module.css";

const ShowPendingBook = (props) => {
  return (
    <div className={styles.pendingbook}>
      <div className={styles.pendingcover}>
        <img src={props.bookImage} className={styles.pendingbookimage} />
        <div>
          <b>Book Details:</b>
          <div className={styles["book-detail-data"]}>
            <b>Title : </b>
            <span className="mx-1">{props.bookTitle}</span>
          </div>
          <div className={styles["book-detail-data"]}>
            <b>Author : </b>
            <span className="mx-1">{props.bookAuthor}</span>
          </div>
        </div>
      </div>
      <div>
        <b>Student Details:</b>
        <div className={styles["book-detail-data"]}>
          <b>Name: </b>
          <span className="mx-1">{props.studentName}</span>
        </div>
        <div className={styles["book-detail-data"]}>
          <b>Email : </b>
          <span className="mx-1">{props.studentEmail}</span>
        </div>
      </div>
      <div className={styles.pendingbookbutton}>
        <button className={styles.acceptbutton}>Accept</button>
        <button className={styles.rejectbutton}>Reject</button>
      </div>
    </div>
  );
};
export default ShowPendingBook;
