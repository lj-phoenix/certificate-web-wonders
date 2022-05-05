import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Certificate from "./components/Certficate";

function App() {
  return (
    <Router basename="certificates_test">
      <Switch>
        <Route path="/:id">
          <Certificate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
