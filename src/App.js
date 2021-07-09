import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from "./components/chat/chat.component";
import Login from "./components/login/login.component";

import { AppBody } from "./App.styles";

import "./App.css";

import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
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
        )}
      </Router>
    </div>
  );
}

export default App;
