const calculation = require('./argsv_note')
const chalks = require('./node_modules/chalk')

const command = process.argv[2]

if (command == 'plus') {
    console.log(calculation.fungsi(command, process.argv[3], process.argv[4]))
} else if (command == 'divide') {
    console.log(chalks.blueBright(calculation.fungsi(command, process.argv[3], process.argv[4])))
} else {
    console.log(calculation.fungsi(command, process.argv[3], process.argv[4]))
}