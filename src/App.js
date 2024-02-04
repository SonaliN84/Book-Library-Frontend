import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthForm from "./components/Authentication/AuthForm";
import Header from "./components/Layout/Header";
import RootLayout from "./components/Layout/RootLayout";
import AddBook from "./components/Books/AddBook";
import { useSelector } from "react-redux";
import BookList from "./components/Books/BookList";
import BookDetail from "./components/Books/BookDetail";
import BookRequests from "./components/Books/BookRequests";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <RootLayout>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        <Route path="/home" exact>
          <BookList />
        </Route>
        <Route path="/add-book" exact>
          <AddBook />
        </Route>
        <Route path="/home/:bookId">
          <BookDetail />
        </Route>
        <Route path="/book-requests">
          <BookRequests />
        </Route>
      </Switch>
    </RootLayout>
  );
}

export default App;
