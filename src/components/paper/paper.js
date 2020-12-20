import React from "react"

export function Paper(children, {containerStyle}) {
  const container = {
    backgroundColor: "white",
    border: "solid 1px #5E5E5E",
    borderRadius: "30px",
    ...containerStyle,
  }
  return <div style={container}>{children}</div>
}
