import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthForm from "./components/Authentication/AuthForm";
import Header from "./components/Layout/Header";
import RootLayout from "./components/Layout/RootLayout";

function App() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
      </Switch>
    </RootLayout>
  );
}

export default App;
