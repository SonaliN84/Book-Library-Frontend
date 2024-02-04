import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../Store/auth-slice";
import { bookActions } from "../../Store/book-slice";
import AddBook from "../Books/AddBook";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const authIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };

  const homeClickHandler = () => {
    console.log("hello");
  };
  useEffect(()=>{
    requestBooksHandler();
  },[])
  const requestBooksHandler = () => {
    axios
      .get("http://127.0.0.1:8000/pending-books", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(bookActions.setpendingBooks(response.data));
      })
      .catch((err) => {
        toast.error("Something went wrong!!!");
      });
  };

  return (
    <Fragment>
      <AddBook show={show} handleClose={handleClose} />
      <Navbar expand="lg" className="header-container" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className="header-text mx-4">
            Book Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {authIsLoggedIn && (
                <Nav.Link className="header-text mx-2">
                  <NavLink
                    to="/home"
                    className="loginSignupTitles"
                    onClick={homeClickHandler}
                  >
                    Home
                  </NavLink>
                </Nav.Link>
              )}
              {authIsLoggedIn && isAdmin && (
                <Nav.Link
                  className="loginSignupTitles header-text mx-2"
                  onClick={handleShow}
                >
                  Add Book
                </Nav.Link>
              )}
              {authIsLoggedIn && isAdmin && (
                <Nav.Link
                  className="header-text mx-2"
                >
                  <NavLink
                    to="/book-requests"
                    className="loginSignupTitles"
                    onClick={requestBooksHandler}
                  >
                    Book requests
                  </NavLink>
                </Nav.Link>
              )}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <Nav>
              {authIsLoggedIn && (
                <Nav.Link className="header-text mx-4">
                  <NavLink
                    to="/"
                    onClick={logoutHandler}
                    className="loginSignupTitles"
                  >
                    Logout
                  </NavLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </Fragment>
  );
};

export default Header;
