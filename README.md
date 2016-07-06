# react-disposion

Reusable, transportable, display and position React components.

## Don't use this

There's not a compelling reason why you should use this.
[jsxstyle](https://github.com/petehunt/jsxstyle) is a more comprehensive
library that overlaps this feature-set completely.

I want something that takes a less shot-gun approach for display/position
components. *But really it's just an excuse to play around in the space and
understand the problem better.*

## Installation and Usage

### Node/CommonJS

*Add to project's `package.json`*
```
$ npm i -D react-disposition
```

*Use as needed*
```
import { Relative, Absolute } from "react-disposition"

const SomethingLikeADropdown = prop => (
  <Relative>
    <Absolute>
      Something like a Dropdown
    </Absolute>
  </Relative>
)
```

### Script-tag

*Add script*
* Copy `/dist/ReactDisposition.js` into your project.
* Add it to your layout file with something like `<script
  src="path/to/ReactDisposition.js"></script>`.
* `React` must be loaded before this file.

*Use as needed*
```
var Relative = ReactDisposition.Relative;
var Absolute = ReactDisposition.Absolute;

ReactDOM.render(
  React.createElement(Relative, null,
    React.createElement(Absolute, null,
      "Something like a Dropdown"
    )
  ),
  mountNode
)
```

## Components

### Display
#### `Block`
#### `Inline`
#### `InlineBlock`
#### `InlineFlex`
#### `Flex`

### Position

Position components take `top`, `right`, `bottom`, `left` values as `props`.

#### `Absolute`
#### `Fixed`
#### `Relative`
