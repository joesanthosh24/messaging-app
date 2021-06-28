import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header.component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
