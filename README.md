# toggle-screencapture-shadow

<p>
  <a href="https://npmjs.com/package/toggle-screencapture-shadow"><img src="https://img.shields.io/npm/v/toggle-screencapture-shadow.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/toggle-screencapture-shadow"><img src="https://img.shields.io/npm/dm/toggle-screencapture-shadow.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/toggle-screencapture-shadow"><img src="https://img.shields.io/circleci/project/egoist/toggle-screencapture-shadow/master.svg?style=flat-square" alt="Build Status"></a>
</p>

## Install

```bash
$ npm install --save toggle-screencapture-shadow
```

## Usage

```js
const toggle = require('toggle-screencapture-shadow')

toggle((err, disabled) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`shadow is now ${disabled ? 'disabled' : 'enabled'}`)
})

// you can also set the new status directly
toggle.set(true | false, cb)
```

## License

MIT © [EGOIST](https://github.com/egoist)
