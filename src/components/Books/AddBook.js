import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store/auth-slice";
import "./AddBook.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Form from "react-bootstrap/Form";

const AddBook = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.show);
  const token = useSelector((state) => state.auth.token);
  console.log("token", token);
  const handleClose = () => {
    dispatch(authActions.setShow({ show: false }));
  };
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    launched: "",
    quantity: "",
    image: "",
  });
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookData = {};
    for (const [name, value] of formData.entries()) bookData[name] = value;
    console.log(bookData);
    axios
      .post("http://127.0.0.1:8000/add-book", bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Book added successfully!");
        // handleClose();
        setFormData({
          title: "",
          author: "",
          description: "",
          rating: "",
          launched: "",
          quantity: "",
          image: "",
        });
      })
      .catch((err) => {
        if (err.request.status == 400) {
          toast.error(err.response.data.detail);
        } else {
          console.log(err);
          toast.error("Something went wrong!!");
        }
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "blueviolet" }}>Add book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3 book-text">
              <Form.Control
                type="text"
                className="book-data shadow-none"
                placeholder="Title"
                name="title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3 book-text">
              <Form.Control
                type="text"
                className="book-data shadow-none"
                placeholder="Author"
                name="author"
                required
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3 book-text shadow-none"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="text"
                className="book-data shadow-none"
                placeholder="Description"
                name="description"
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3 book-text"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="number"
                min="0"
                max="5"
                placeholder="Rating"
                className="book-data shadow-none"
                name="rating"
                required
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 book-text"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="date"
                className="book-data shadow-none"
                placeholder="Launched date"
                name="launched"
                required
                value={formData.launched}
                onChange={(e) =>
                  setFormData({ ...formData, launched: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 book-text"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="text"
                className="book-data shadow-none"
                placeholder="Image url"
                name="image"
                required
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3 book-text"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="text"
                className="book-data shadow-none"
                placeholder="Quantity"
                name="quantity"
                required
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </Form.Group>
            <div className="newbutton">
              <button className="submit-button">Add book</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AddBook;
