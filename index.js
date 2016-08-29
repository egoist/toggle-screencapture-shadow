'use strict'
const exec = require('child_process').exec
const isDisabled = require('screencapture-shadow-disabled')

function set(disable, cb) {
  exec(`defaults write com.apple.screencapture disable-shadow -bool ${disable} && killall SystemUIServer`, (error, stdout, stderr) => {
    if (typeof cb === 'function') {
      cb(error || stderr, disable)
    }
  })
}

function toggle(cb) {
  isDisabled((err, disabled) => {
    if (err) {
      return cb(err)
    }
    set(!disabled, cb)
  })
}

module.exports = toggle
module.exports.set = set
