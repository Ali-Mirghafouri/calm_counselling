import React, {Fragment} from "react"
import {Footer, Header, ImageWithText} from "../../components"
import {ABOUT} from "../../constant"
import {images} from "../../images"

export function About() {
  const container = {
    display: "flex",
    marginBottom: "280px",
  }
  const team_container = {
    display: "flex",
    height: "500px",
    justifyContent: "center",
  }
  const team_images = {
    width: "300px",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "100%",
  }
  const team_text_container = {
    marginLeft: "100px",
    width: "600px",
  }
  const team_names = {
    fontSize: "30px",
    fontWeight: "bolder",
    marginBottom: "5px",
  }
  const team_positions = {
    fontSize: "22px",
    fontWeight: 500,
    marginBottom: "9px",
  }
  const team_achievements = {
    fontSize: "20px",
  }
  const meet_text = {
    fontSize: "106px",
    fontWeight: "bolder",
    textAlign: "center",
    marginBottom: "124px",
  }
  const box1 = {
    width: "730px",
    height: "300px",
    border: "solid 14px #026670",
    position: "absolute",
    left: "61px",
    top: "570px",
    zIndex: "101",
    fontSize: "100px",
    fontWeight: "bolder",
  }
  const box2 = {
    width: "730px",
    height: "300px",
    border: "solid 14px black",
    position: "absolute",
    left: "86px",
    top: "545px",
    zIndex: "100",
  }
  const heading_why = {
    marginLeft: "40px",
    textAlign: "center",
  }
  const why_description = {
    marginLeft: "47%",
    marginRight: "100px",
    marginTop: "30px",
    textAlign: "left",
    fontSize: "30px",
    lineHeight: "60px",
  }
  const imageStyle = {
    imageWidth: ["217px", "290px", "397px", "341px"],
    imageHeight: ["248px", "290px", "272px", "299px"],
  }
  return (
    <Fragment>
      <Header header="ABOUT US" subHeader="Nurture your welfare" image={images.aboutUs.header} />
      <div style={container}>
        <div>
          <div style={box1}>
            <div style={heading_why}>{ABOUT.why_header}</div>
          </div>
          <div style={box2}></div>
        </div>
        <div style={why_description}>
          {ABOUT.why_description.map((text) => (
            <div>{text}</div>
          ))}
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginBottom: "162px"}}>
        {ABOUT.why_reasons.text.map((text, index) => (
          <div>
            <ImageWithText
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "100px",
              }}
              textStyle={{textAlign: "center"}}
              imageContainerStyle={{
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
              }}
              key={text}
              text={text}
              subText={ABOUT.why_reasons.subText[index]}
              image={images.aboutUs.why_choose_us[index]}
              fontSize="29px"
              fontWeight="500"
              imageWidth={imageStyle.imageWidth[index]}
              imageHeight={imageStyle.imageHeight[index]}></ImageWithText>
          </div>
        ))}
      </div>
      <div>
        <div style={meet_text}>{ABOUT.meet}</div>
        {ABOUT.team.name.map((text, index) => (
          <div style={team_container}>
            <img
              src={images.aboutUs.team[index]}
              style={team_images}
              alt={images.aboutUs.team[index]}></img>
            <div style={team_text_container}>
              <div style={team_names}>{text}</div>
              <div style={team_positions}>{ABOUT.team.position[index]}</div>
              {ABOUT.team.achievements[index].map((text, index) => (
                <div style={team_achievements}>{text}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </Fragment>
  )
}
