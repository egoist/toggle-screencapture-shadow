'use strict'
const toggle = require('./')

toggle(err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('done!')
})
