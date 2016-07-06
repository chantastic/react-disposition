import React from "react"

const elementStyles = (
  applied,
  positions
) => ({
  position: "absolute",
  ...positions,
  ...applied,
})

const Absolute = ({
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

module.exports = Absolute
