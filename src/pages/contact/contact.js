import React, {Fragment, useState} from "react"
import {Footer, Header} from "../../components"
import {images} from "../../images"
import {Paper} from "../../components"
import {CONTACT} from "../../constant"

import * as emailjs from "emailjs-com"
emailjs.init("user_iCfG1P6IsdTrS0CKX21GG")

const SERVICE_ID = "service_mrs88pa" //get these from the website
const TEMPLATE_ID = "template_yfg55w8"
const USER_ID = "user_7lb3PAGKnyYTi2no5SgHT"

export function Contact() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  })

  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    setData({
      ...(data[name] = value),
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  // if (
  //   data.first_name !== "" &&
  //   data.last_name !== "" &&
  //   data.email !== "" &&
  //   data.message !== ""
  // )
  // console.log(tempData)
  // emailjs.send(SERVICE_ID, TEMPLATE_ID, tempData, USER_ID).then(
  //   function (response) {
  //     console.log(response.status, response.text)
  //   },
  //   function (err) {
  //     console.log(err)
  //   }
  // )

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display: "flex", marginBottom: "32px"}}>
              <div style={{marginRight: "100px"}}>
                <label for="first_name" style={label_text}>
                  First Name
                </label>{" "}
                <input
                  required
                  name="first_name"
                  id="first_name"
                  onChange={(e) => handleChange(e)}
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
                <input
                  required
                  onChange={(e) => handleChange(e)}
                  name="last_name"
                  id="last_name"
                  style={{...label_style, width: "100%"}}
                />
              </div>
            </div>
            <div style={{marginBottom: "32px"}}>
              <label for="email" style={label_text}>
                Email Address
              </label>{" "}
              <input
                required
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                id="email"
                style={{...label_style, width: "100%"}}
              />
            </div>
            <label for="message" style={label_text}>
              Send Us A Message
            </label>{" "}
            <textarea
              required
              onChange={(e) => handleChange(e)}
              name="message"
              id="message"
              style={{...label_style, width: "100%", paddingBottom: "376px", paddingTop: "18px"}}
            />
            <div style={{display: "flex", marginBottom: "40px"}}>
              <input
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
