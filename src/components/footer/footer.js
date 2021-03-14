import React from "react"
import {FOOTER} from "../../constant"
import {images} from "../../images"
import "./footer.css"

export function Footer() {
  return (
    <div className="footer_container">
      <div>
        {FOOTER.info.map((text, index) => (
          <div className="footer_info_container">
            <div className="footer_image_container">
              <img
                src={FOOTER.infoImage[index]}
                alt={FOOTER.infoImage[index]}
                className="footer_info_image"
              />
            </div>
            <div className="footer_text">{text}</div>
          </div>
        ))}
      </div>
      <div className="footer_copy_right">{FOOTER.copyRight}</div>
      <div>
        {FOOTER.social.map((text, index) => (
          <a
            rel="noreferrer"
            target="_blank"
            href={FOOTER.socialLink[index]}
            className="footer_soc_container">
            <div className="footer_image_container">
              <img
                src={FOOTER.socialImage[index]}
                alt={FOOTER.socialImage[index]}
                className="footer_soc_image"
              />
            </div>
            <div className="footer_soc_text">{text}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
