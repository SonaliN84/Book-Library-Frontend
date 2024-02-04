import Card from "react-bootstrap/Card";
import styles from "./Books.module.css";
import { NavLink } from "react-router-dom";
import moment from "moment";
const ShowBook = (props) => {
  return (
    <Card className={styles.cardbox}>
      <NavLink to={`/home/${props.id}`} className={styles["link-box"]}>
        <Card.Img
          variant="top"
          className={styles.bookimage}
          src={props.imageurl}
        />
        <Card.Body>
          <h5 className={styles.booktitle}>{props.title}</h5>
          <Card.Text className={styles["card-text-container"]}>
            <div className={styles["flex-row"]}>
              <div className={styles["coin-base"]}>
                <img
                  src="https://t3.ftcdn.net/jpg/01/09/84/42/360_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
                  alt="rating"
                  class={styles["small-image"]}
                />
                <p className={styles.bookdata}>{props.rating}</p>
              </div>
              <div className={styles["time-left"]}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/clock-2843478-2363825.png?f=webp"
                  // src="https://cdn-icons-png.flaticon.com/512/1827/1827336.png"
                  // src="https://cdn-icons-png.flaticon.com/512/6615/6615373.png"
                  alt="clock"
                  className={styles["small-image"]}
                />
                <p className={styles.bookdata}>
                  {moment(props.launched).format("LL")}
                </p>
              </div>
            </div>
            <div className={styles.cardattribute}>
              <img
                src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
                //   src="https://icon-library.com/images/library-book-icon/library-book-icon-20.jpg"
                alt="avatar"
                class={styles.smallavatar}
              />
              <p className={styles.booktext}>
                Creation of{" "}
                <span className={styles.author}>{props.author}</span>
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </NavLink>
    </Card>
  );
};

export default ShowBook;
