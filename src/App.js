import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact"
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={Product} path='/product' />
      <Route component={Contact} path='/contact' />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
