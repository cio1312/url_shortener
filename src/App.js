import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import HandelUrl from "./HandelUrl";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wafer/:endpart" component={HandelUrl} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;