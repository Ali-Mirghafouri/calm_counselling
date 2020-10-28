import "./App.css"
import logo from "./calm_counselling_logo.png"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {Home} from "../pages"

const tabOptions = ["Home", "About", "Services", "Gallery", "Contact"]

function App() {
  return (
    <Router>
      <Redirect to="/Home" />
      <div className="app_nav_container">
        <div className="app_img_container">
          <img src={logo} alt="calm counselling logo"></img>
        </div>
        <div className="app_nav_options_container">
          {tabOptions.map((tabName) => (
            <a className="app_nav_option" href={"/" + tabName}>
              {tabName}
            </a>
          ))}
        </div>
      </div>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/Gallery"></Route>
        <Route path="/Contact"></Route>
      </Switch>
    </Router>
  )
}

export default App
