import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  document.title = "Firebase auth";

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
