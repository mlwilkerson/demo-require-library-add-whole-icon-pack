const fontawesome = require('@fortawesome/fontawesome')
const fas = require('@fortawesome/fontawesome-free-solid')['default']
fontawesome.library.add(fas)
const faCoffee = fontawesome.findIconDefinition({prefix: 'fas', iconName: 'coffee'})
console.log(`coffee unicode: ${faCoffee.icon[3]}`)
