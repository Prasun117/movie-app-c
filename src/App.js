import "./styles.css";

import { useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Series } from "./Series";
export default function App() {
  const [drawerToggle, setDrawerToggle] = useState(false);
  return (
    <div className="App">
      <HeaderComponent />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
