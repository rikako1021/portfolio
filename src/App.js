import { BrowserRouter, Route, Swicth} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Swicth>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
    </Swicth>
    </BrowserRouter>
  );
}

export default App;
