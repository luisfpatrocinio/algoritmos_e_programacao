var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    const number = Number(lines.shift());
    for (let i = 1; i <= number; i+=2) {
        console.log(i)
    }
}

main();