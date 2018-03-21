const fontawesome = require('@fortawesome/fontawesome-svg-core')
const fas = require('@fortawesome/free-solid-svg-icons')['fas']
fontawesome.library.add(fas)
const faCoffee = fontawesome.findIconDefinition({prefix: 'fas', iconName: 'coffee'})
console.log(`coffee unicode: ${faCoffee.icon[3]}`)
