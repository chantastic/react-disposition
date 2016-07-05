const display = {
  Block: require("./src/Block"),
}

const position = {
  Absolute: require("./src/Absolute"),
  Fixed: require("./src/Fixed"),
  Relative: require("./src/Relative"),
}

module.exports = {
  ...display,
  ...position,
}
