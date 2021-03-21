import "./App.css"
import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {About, Home, Services, Contact} from "../pages"
import {NAV} from "../constant"
import {images} from "../images"

function App() {
  return (
    <Router>
      <div className="app_nav_container">
        <div className="app_img_container">
          <img src={images.logo} alt="calm counselling logo"></img>
        </div>
        <div className="app_nav_options_container">
          {NAV.map((tabName) => (
            <a key={tabName} className="app_nav_option" href={"/" + tabName}>
              {tabName}
            </a>
          ))}
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Redirect exact from="/" to="/Home" /> */}
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/about">
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
