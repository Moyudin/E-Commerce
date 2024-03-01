import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIN from "./pages/SignIN";
import SignUp from "./pages/SignUP";
import Product from "./pages/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/SignIN" component={SignIN}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/Products/:id" component={Product}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
