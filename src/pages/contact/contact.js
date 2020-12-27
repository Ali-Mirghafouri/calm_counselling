import React, {Fragment} from "react"
import {Footer, Header} from "../../components"
import {images} from "../../images"

export function Contact() {
  return (
    <Fragment>
      <Header
        image={images.contact.header}
        header="CONTACT US"
        subHeader="Call or drop us an email for your appointment today!"
      />
      <Footer />
    </Fragment>
  )
}
