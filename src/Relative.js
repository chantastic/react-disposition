import React from "react"

const elementStyles = applied => ({
  position: "relative",
  ...applied,
})

const Relative = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Relative
