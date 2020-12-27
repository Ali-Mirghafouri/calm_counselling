import React from "react"

export function Paper({containerStyle, children}) {
  const container = {
    backgroundColor: "white",
    border: "solid 1px #5E5E5E",
    borderRadius: "30px",
    width: "min-content",
    ...containerStyle,
  }
  return <div style={container}>{children}</div>
}
