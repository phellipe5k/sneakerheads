const ColorThief = require('color-thief');

const color = (url) => {
  var colorThief = new ColorThief();
  console.log(colorThief.getPalette("https://i.imgur.com/CypfPvl.png", 8));
}
color()