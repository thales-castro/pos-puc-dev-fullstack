// CommonJS
const circle = require('./modules_definitions.js');
console.log('Circle area (radio 4) is:  ${circle.area(4)}');

const { area } = require('./modules_definitions.js');
console.log('Ratio 2 area circle is: ${area(2)}');