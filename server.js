const noer = require('noer')

noer('public/index.html', [8080], (serveHTML, data) => {
    let answer, operator
    const left = parseFloat(data.left)
    const right = parseFloat(data.right)

    if('add' in data) {
        answer = left + right
        operator = '+'
    }
    if('subtract' in data) {
        answer = left - right
        operator = '-'
    }
    if('multiply' in data) {
        answer = left * right
        operator = 'x'
    }
    if('divide' in data) {
        answer = left / right
        operator = '/'
    }

    if(Number.isFinite(answer)) {
        serveHTML({results: `<p>${left} ${operator} ${right} = ${answer}</p>`})
    }
})