import React from "react"
import "./imageWithText.css"

export function ImageWithText({
  image,
  text,
  Subtext,
  imageWidth,
  imageHeight,
  fontSize,
  fontWeight,
  imageStyle,
  textStyle,
  subTextStyle,
  containerStyle,
  imageContainerStyle,
  children,
  subText,
}) {
  const ImageStyle = {width: imageWidth, height: imageHeight, ...imageStyle}
  const TextStyle = {fontSize: fontSize, fontWeight: fontWeight, marginTop: "20px", ...textStyle}
  const SubTextStyle = {fontSize: fontSize, fontWeight: fontWeight, ...subTextStyle}
  const ContainerStyle = {...containerStyle}
  const ImageContainerStyle = {...imageContainerStyle}
  return (
    <div style={ContainerStyle}>
      <div style={ImageContainerStyle}>
        <img src={image} alt={text} style={ImageStyle}></img>
      </div>
      <div style={TextStyle}>{text}</div>
      <div style={SubTextStyle}>{subText}</div>
      {children}
    </div>
  )
}
