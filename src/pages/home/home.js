import React, {Fragment} from "react"
import bg_picture from "./bg_picture.png"
import "./home.css"

export function Home() {
  const bg_pic = {backgroundImage: `url(${bg_picture})`}
  return (
    <Fragment>
      <div style={bg_pic} className="home_section1">
        <div className="home_section1_inner_container">
          <div className="home_section1_quote_container">
            <div className="home_section1_quote">
              Counselling is a process through which clients work face to face with a trained
              counselor in a safe, trusting and confidential environment.
            </div>
          </div>
          <button className="home_section1_button">BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </Fragment>
  )
}
