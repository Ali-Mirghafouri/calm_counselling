import React, {Fragment} from "react"
import "./imageWithText.css"

export function ImageWithText({
  image,
  text,
  imageWidth,
  imageHeight,
  fontSize,
  fontWeight,
  children,
}) {
  const imageStyle = {width: imageWidth, height: imageHeight}
  const textStyle = {fontSize: fontSize, fontWeight: fontWeight}
  return (
    <div>
      <img src={image} alt={text} style={imageStyle}></img>
      <div className="iwt_text" style={textStyle}>
        {text}
      </div>
      {children}
    </div>
  )
}
