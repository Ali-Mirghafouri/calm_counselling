import React, {Fragment} from "react"
import {Footer, Header} from "../../components"
import {images} from "../../images"
import {Paper} from "../../components"
import {CONTACT} from "../../constant"

export function Contact() {
  const papers_container = {
    display: "flex",
    marginTop: "5vw",
    marginBottom: "5vw",
  }
  const paper = {
    width: "10vw",
    height: "10vw",
    borderRadius: "100%",
    backgroundColor: "#026670",
    border: "solid 1px #707070",
  }
  const paper_container = {
    display: "flex",
    justifyContent: "center",
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
  const paper_image_phone = {
    width: "3vw",
    height: "3vw",
  }
  const paper_image_loc = {
    width: "3vw",
    height: "4vw",
  }
  const paper_image_mail = {
    width: "3.5vw",
    height: "3vw",
  }
  const paper_text = {
    textAlign: "center",
    color: "#026670",
  }
  const paper_text_header = {
    fontSize: "32px",
    fontWeight: "bolder",
  }
  const paper_text_subHeader = {
    fontSize: "25px",
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
          <div style={paper_container}>
            <Paper containerStyle={paper}>
              <div style={paper_img_container}>
                <img
                  src={images.footer.phone}
                  alt={images.footer.phone}
                  style={paper_image_phone}
                />
              </div>
            </Paper>
            <div style={paper_text}>
              <div style={paper_text_header}>{CONTACT.phone}</div>
              <div style={paper_text_subHeader}>{CONTACT.number1}</div>
              <div style={paper_text_subHeader}>{CONTACT.number2}</div>
            </div>
          </div>
          <div style={paper_container}>
            <Paper containerStyle={paper}>
              <div style={paper_img_container}>
                <img
                  src={images.contact.location}
                  alt={images.contact.location}
                  style={paper_image_loc}
                />
              </div>
            </Paper>
            <div style={paper_text}>
              <div style={paper_text_header}>{CONTACT.address}</div>
              <div style={paper_text_subHeader}>{CONTACT.address_info1}</div>
              <div style={paper_text_subHeader}>{CONTACT.address_info2}</div>
              <div style={paper_text_subHeader}>{CONTACT.address_info3}</div>
            </div>
          </div>
          <div style={paper_container}>
            <Paper containerStyle={paper}>
              <div style={paper_img_container}>
                <img src={images.contact.mail} alt={images.contact.mail} style={paper_image_mail} />
              </div>
            </Paper>
            <div style={paper_text}>
              <div style={paper_text_header}>{CONTACT.email}</div>
              <div style={paper_text_subHeader}>{CONTACT.email_info}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
