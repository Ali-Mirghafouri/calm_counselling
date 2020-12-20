import React from "react"

export function Header({header, subHeader, image}) {
  const container = {
    width: "100%",
    height: "22vw",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  }
  const container_inner = {
    backdropFilter: "blur(19px)",
    width: "100%",
    height: "22vw",
    backgroundColor: "rgba(0, 0, 0, 40%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
  const header_text = {
    color: "white",
    fontSize: "6vw",
    fontWeight: "bolder",
  }
  const subHeader_text = {
    fontWeight: "normal",
    fontSize: "1.3vw",
  }
  return (
    <div style={container}>
      <div style={{...container_inner, ...header_text}}>
        {header}
        <div style={subHeader_text}>{subHeader}</div>
      </div>
    </div>
  )
}
