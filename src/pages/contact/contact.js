import React, {Fragment} from "react"
import {Footer, Header} from "../../components"
import {images} from "../../images"
import {Paper} from "../../components"
import {CONTACT} from "../../constant"

export function Contact() {
  const papers_container = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
    marginBottom: "40px",
  }
  const paper = {
    width: "285px",
    height: "285px",
    borderRadius: "100%",
    backgroundColor: "#026670",
    border: "solid 1px #707070",
  }
  const paper_container = {
    display: "flex",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    flexDirection: "column",
  }
  const paper_img_container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }
  const paper_image = {
    width: "66px",
  }
  const paper_text = {
    marginTop: "21px",
    textAlign: "center",
    color: "#026670",
  }
  const paper_text_header = {
    fontSize: "32px",
    fontWeight: "bolder",
    marginBottom: "30px",
  }
  const paper_text_subHeader = {
    marginBottom: "18px",
    fontSize: "25px",
  }
  const label_style = {
    border: "2px solid #3AAFA9",
    borderRadius: "28px",
    height: "73px",
    marginTop: "8px",
    paddingLeft: "8px",
    fontSize: "24px",
  }
  const label_text = {
    fontSize: "20px",
  }

  return (
    <Fragment>
      <Header
        image={images.contact.header}
        header="CONTACT US"
        subHeader="Call or drop us an email for your appointment today!"
      />
      <div style={{backgroundColor: "#F2F8F5"}}>
        <div style={papers_container}>
          {CONTACT.data.map(({title, text, image}) => (
            <div style={paper_container}>
              <Paper containerStyle={paper}>
                <div style={paper_img_container}>
                  <img src={image} alt={image} style={paper_image} />
                </div>
              </Paper>
              <div style={paper_text}>
                <div style={paper_text_header}>{title}</div>
                {text.map((text) => (
                  <div style={paper_text_subHeader}>{text}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "900px",
              height: "870px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <a
              href="https://www.google.com.my/maps/place/58a,+Jalan+BRP+1%2F2,+Bukit+Rahman+Putra,+47000+Sungai+Buloh,+Selangor/@3.2115193,101.5598376,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc457328a2ebc3:0x401eddfb45c2bc97!8m2!3d3.2115139!4d101.5620263"
              target="_blank"
              rel="noreferrer">
              <img
                src={images.contact.google_maps_location}
                alt="google maps location"
                style={{width: "855px", height: "855px"}}
              />
            </a>
          </div>
          <form>
            <div style={{display: "flex", marginBottom: "32px"}}>
              <div style={{marginRight: "100px"}}>
                <label for="first_name" style={label_text}>
                  First Name
                </label>{" "}
                <input
                  name="first_name"
                  id="first_name"
                  style={{
                    ...label_style,
                    width: "100%",
                  }}
                />
              </div>
              <div>
                <label for="last_name" style={label_text}>
                  Last Name
                </label>{" "}
                <input name="last_name" id="last_name" style={{...label_style, width: "100%"}} />
              </div>
            </div>
            <div style={{marginBottom: "32px"}}>
              <label for="email" style={label_text}>
                Email Address
              </label>{" "}
              <input type="email" name="email" id="email" style={{...label_style, width: "100%"}} />
            </div>
            <label for="message" style={label_text}>
              Send Us A Message
            </label>{" "}
            <textarea
              name="message"
              id="message"
              style={{...label_style, width: "100%", paddingBottom: "376px", paddingTop: "18px"}}
            />
            <div style={{display: "flex", marginBottom: "40px"}}>
              <input
                // onClick={handleSubmit}
                type="submit"
                value="Send Message"
                style={{
                  marginTop: "32px",
                  backgroundColor: "#3AAFA9",
                  border: "0.3px solid #3F3F3F",
                  boxShadow: "4px 4px 8px #459D98",
                  height: "74px",
                  width: "340px",
                  borderRadius: "37px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
