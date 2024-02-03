import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthForm from "./components/Authentication/AuthForm";
import Header from "./components/Layout/Header";
import RootLayout from "./components/Layout/RootLayout";
import AddBook from './components/Books/AddBook';
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn =useSelector((state)=>state.auth.isLoggedIn)
  return (
    <RootLayout>
      <Switch>
        <Route path="/" exact>
          <AuthForm/>
        </Route>
        <Route path="/add-book" exact>
          <AddBook/>
        </Route>
      </Switch>
    </RootLayout>
  );
}

export default App;
