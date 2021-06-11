import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Headers from './components/Header/Headers';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>
          <h2>404 Error</h2>
          <h4>Sorry the page not found!</h4>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
