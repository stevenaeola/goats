const headingEl = document.getElementById('heading')
const hexCodes = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']

setInterval(() => {
  headingEl.style.color = hexCodes[Math.floor(Math.random() * hexCodes.length)]
}, 100)