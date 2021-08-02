import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Assets from "./components/Assets";
import Developers from "./components/Developers";
import Overview from "./components/Overview";
import Licenses from "./components/Licenses";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        <Navbar
          isLoggedIn={isLoggedIn}
          handleLogOut={() => setIsLoggedIn(false)}
        />
        <Switch>
          <Route path="/" exact>
            <Login
              onLogin={(value) => {
                setIsLoggedIn(value);
              }}
            />
          </Route>
          <Route path="/login">Esta es la pagina de login</Route>
          <Route path="/assets">
            <Assets />
          </Route>
          <Route path="/developers">
            <Developers />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/licenses">
            <Licenses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
