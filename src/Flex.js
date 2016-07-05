import React from "react"

const elementStyles = applied => ({
  display: "flex",
  ...applied,
})

const Flex = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Flex
