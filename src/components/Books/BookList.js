import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowBook from "./ShowBook";
import styles from "./Books.module.css";
import axios from "axios";
import { bookActions } from "../../Store/book-slice";
const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/books", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(bookActions.setBooks(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className={styles["book-container"]}>
        {books.length &&
          books.map((item) => (
            <ShowBook
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              author={item.author}
              launched={item.launched}
              rating={item.rating}
              imageurl={item.image}
            />
          ))}
      </div>
    </div>
  );
};
export default BookList;
