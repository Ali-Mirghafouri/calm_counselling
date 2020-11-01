import React from "react"
import {images} from "../../images"
import "./footer.css"

export function Footer() {
  return (
    <div className="footer_container">
      <div>
        <div className="footer_flex">
          <div className="footer_image_container">
            <img
              src={images.footer.location}
              alt={images.footer.location}
              className="footer_image"></img>
          </div>
          <div className="footer_text">
            58A, Jalan BRP 1/2 Bukit Rahman Putra 47000, Sungai Buloh Selangor Darul Ehsan
          </div>
        </div>
        <div className="footer_flex">
          <div className="footer_image_container">
            <img src={images.footer.phone} alt={images.footer.phone} className="footer_image"></img>
          </div>
          <div className="footer_text">+603-6151 5610</div>
        </div>
        <div className="footer_flex">
          <div className="footer_image_container">
            <img src={images.footer.mail} alt={images.footer.mail} className="footer_image"></img>
          </div>
          <div className="footer_text">thecalmcs@gmail.com</div>
        </div>
      </div>
      <div className="footer_copy_right">COPYRIGHT © CALMCOUNSELLING 2020 </div>
      <div>
        <div className="footer_flex">
          <div className="footer_image_container footer_space">
            <img
              src={images.footer.insta}
              alt={images.footer.insta}
              className="footer_image_link"></img>
          </div>
          <div className="footer_text">@thecalmcs</div>
        </div>
        <div className="footer_flex">
          <div className="footer_image_container footer_space">
            <img
              src={images.footer.facebook}
              alt={images.footer.facebook}
              className="footer_image_link"></img>
          </div>
          <div className="footer_text">@CalmCounselling</div>
        </div>
      </div>
    </div>
  )
}
