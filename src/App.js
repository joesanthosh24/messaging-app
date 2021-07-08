import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from "./components/chat/chat.component";

import { AppBody } from "./App.styles";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
