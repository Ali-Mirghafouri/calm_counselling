import "./App.css"
import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom"
import {About, Home, Services, Contact} from "../pages"
import {NAV} from "../constant"
import {images} from "../images"

function App() {
  return (
    <Router>
      <div className="app_nav_container">
        <img src={images.logo} alt="calm counselling logo" className="app_img"></img>
        <div className="app_nav_options_container">
          {NAV.map((tabName) => (
            <Link key={tabName} className="app_nav_option" to={"/" + tabName}>
              {tabName}
            </Link>
          ))}
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/Home" />
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
