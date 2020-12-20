import React, {Fragment} from "react"
import {Footer, Header, ImageWithText} from "../../components"
import {images} from "../../images"

export function Services() {
  const container = {
    backgroundColor: "#F2F8F5",
  }
  return (
    <Fragment>
      <Header
        header="SERVICES"
        subHeader="Heal your past, dream your future; with us"
        image={images.services.noPath}
      />
      <div style={container}>
        <Services>hello</Services>
      </div>
    </Fragment>
  )
}
