import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
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
    </Switch>
    </BrowserRouter>
  );
}

export default App;
