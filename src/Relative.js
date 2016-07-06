import React from "react"

const elementStyles = (
  applied,
  positions
) => ({
  position: "relative",
  ...positions,
  ...applied,
})

const Relative = ({
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

module.exports = Relative
