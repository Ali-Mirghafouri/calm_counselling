import "./App.css"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {About, Home} from "../pages"
import {NAV} from "../constant"
import {images} from "../images"
import {Services} from "../pages/services"

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
          <Redirect exact from="/" to="/Home" />
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
        <Route path="/Gallery"></Route>
        <Route path="/Contact"></Route>
      </Switch>
    </Router>
  )
}

export default App
