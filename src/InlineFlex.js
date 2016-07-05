import React from "react"

const elementStyles = applied => ({
  display: "inline-flex",
  ...applied,
})

const InlineFlex = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = InlineFlex
