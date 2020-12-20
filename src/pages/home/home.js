import React, {Fragment} from "react"
import {Footer, ImageWithText, Slider} from "../../components"
import {HOME} from "../../constant"
import {images} from "../../images"
import "./home.css"

export function Home() {
  const bg_pic = {backgroundImage: `url(${images.home.bg_picture})`}
  const bg_section6 = {backgroundImage: `url(${images.home.section6})`}

  return (
    <Fragment>
      <div style={bg_pic} className="home_section1">
        <div className="home_section1_inner_container">
          <div className="home_section1_quote_container">
            <div className="home_section1_quote">{HOME.section1Quote}</div>
          </div>
          <button className="home_section1_button">{HOME.bookAnAppointment}</button>
        </div>
      </div>
      <Slider />
      <div className="home_section3_container">
        <div className="home_section3_header">{HOME.whatIsCounselling}</div>
        <div className="home_section3_content">{HOME.counsellingDescription}</div>
      </div>
      <div className="home_section4_container">
        <div className="home_section4_header">{HOME.typesOfCounselling}</div>
        <div className="home_section4_content_container">
          {HOME.allTypesOfCounselling.map((text, index) => (
            <div
              style={{
                padding: index === 1 || index === 4 ? "0px 240px" : null,
                marginBottom: index === 0 ? "40px" : null,
              }}>
              <ImageWithText
                key={text}
                text={text}
                textStyle={{textAlign: "center"}}
                image={images.home.types[index]}
                fontSize="30px"
                imageWidth="18.229vw"
                imageHeight="32.407vh"></ImageWithText>
            </div>
          ))}
        </div>
      </div>
      <div className="home_section5_container">
        <div className="home_section5_content">{HOME.effectsOfCounselling}</div>
      </div>
      <div className="home_section6_container" style={bg_section6}>
        <div className="home_section6_header">{HOME.howIsCounselling}</div>
        <div className="home_section6_content">{HOME.howIsCounsellingContent}</div>
      </div>
      <Footer />
    </Fragment>
  )
}
