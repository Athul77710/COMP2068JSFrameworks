const connect = require('connect');
const url = require('url');
const http = require('http');

const app = connect();

function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    if (isNaN(x) || isNaN(y)) {
        res.end('Error: x and y must be valid numbers.');
        return;
    }

    let result;
    let symbol;

    switch (method) {
        case 'add':
            result = x + y;
            symbol = '+';
            break;
        case 'subtract':
            result = x - y;
            symbol = '-';
            break;
        case 'multiply':
            result = x * y;
            symbol = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Division by zero is not allowed.');
                return;
            }
            result = x / y;
            symbol = '/';
            break;
        default:
            res.end('Invalid method. Please use add, subtract, multiply, or divide.');
            return;
    }

    res.end(`${x} ${symbol} ${y} = ${result}`);
}

app.use('/lab3', calculate);

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
