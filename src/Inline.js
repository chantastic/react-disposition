import React from "react"

const elementStyles = applied => ({
  display: "inline",
  ...applied,
})

const Inline = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Inline
