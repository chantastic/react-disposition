import React from "react"

const elementStyles = (
  applied,
  positions
) => ({
  position: "fixed",
  ...positions,
  ...applied,
})

const Fixed = ({
  style,
  top,
  right,
  bottom,
  left,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style, { top, right, bottom, left })}
  />
)

module.exports = Fixed
