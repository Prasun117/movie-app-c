import "./styles.css";

import { useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Footer } from "./Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Series } from "./Series";
import { CustomDrawer } from "./CustomDrawer";
export default function App() {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const handleDrawerToogleClose = () => {
    setDrawerToggle(false);
  };
  const handleDrawerToogleOpen = () => {
    setDrawerToggle(true);
  };
  return (
    <div className="App">
      <HeaderComponent handleDrawerToogleOpen={handleDrawerToogleOpen} />
      <CustomDrawer
        handleDrawerToogleClose={handleDrawerToogleClose}
        drawerToggle={drawerToggle}
      />
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
