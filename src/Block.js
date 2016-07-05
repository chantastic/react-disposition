const elementStyles = applied => ({
    display: "block",
    ...applied,
})

const Block = ({
    style,
    ...props,
}) => (
    <div
        {...props}
        style={elementStyles(style)}
    />
)

module.exports = Block
