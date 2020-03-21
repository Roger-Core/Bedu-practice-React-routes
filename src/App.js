import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <hr />
        <Switch>
          <Route path="/profile/:id?" component={HomePage} />
          <Route path="/payment" component={Pay} />
          <Route path="/batman" component={About} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

const Nav = props => {
  console.log(props);
  let location = useLocation();
  return (
    <nav>
      <ul>
        <li className={` ${location.pathname === "/profile" ? "Active" : ""}`}>
          <Link to="/profile">Home</Link>
        </li>
        <li className={` ${location.pathname === "/about" ? "Active" : ""}`}>
          <Link to="/batman">About</Link>
        </li>
        <li className={` ${location.pathname === "/payment" ? "Active" : ""}`}>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
    </nav>
  );
};

const About = props => {
  console.log(props.match);
  return (
    <div>
      <Link to={`${props.match.url}/lol`}>lololo</Link>
      <h1>About Page</h1>
    </div>
  );
};

const HomePage = props => {
  //console.log(props);
  let { id } = useParams();
  if (props.location.pathname === "/") {
    props.history.push("/profile");
  }
  return (
    <div>
      <h1>Estas en Home</h1>
      {id && <p>Bienvenido: {id}</p>}
    </div>
  );
};

const Pay = () => {
  return <h1>Payment page</h1>;
};

export default App;
