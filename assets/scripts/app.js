'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// Create variable for the welcome message
  const greeting = 'Howdy'
  const name = 'Alyssa'
  const message = ', please check your order:'
  // Concatenate the 3 variable above to create the welcome message
  const welcome = `greeting + name + message`

  // Create variables to hold details about the sign
  const sign = 'Montague House'
  const tiles = sign.length
  const subTotal = tiles * 5
  const shipping = 7
  const grandTotal = subTotal + shipping

  // Get the element that has an id of greeting
  const el = document.getElementById('greeting')
  // Replace the content of that element with the personalized welcome message
  el.textContent = welcome

  // Get the element that has an id of userSign then update its contents
  const elSign = document.getElementById('userSign')
  elSign.textContent = sign

  // Get the element that has an id of tiles then update its contents
  const elTiles = document.getElementById('tiles')
  elTiles.textContent = tiles

  // Get the element that has an id of subTotal then update its contents
  const elSubTotal = document.getElementById('subTotal')
  elSubTotal.textContent = subTotal

  // Get the element that has an id of shipping then update its contents
  const elShipping = document.getElementById('shipping')
  elShipping.textContent = shipping

  // Get the element that has an id of grandTotal then update its contents
  const elGrandTotal = document.getElementById('grandTotal')
  elGrandTotal.textContent = grandTotal
})
