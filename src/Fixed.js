const elementStyles = applied => ({
  position: "fixed",
  ...applied,
})

const Fixed = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = Fixed
