const elementStyles = applied => ({
  display: "inline-block",
  ...applied,
})

const InlineBlock = ({
  style,
  ...props,
}) => (
  <div
    {...props}
    style={elementStyles(style)}
  />
)

module.exports = InlineBlock
