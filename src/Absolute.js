import React from "react"

const elementStyles = applied => ({
  position: "absolute",
  ...applied,
})

const Absolute = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Absolute
