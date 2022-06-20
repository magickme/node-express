const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    // normalize URL by removing querystring, trailing slashes, etc. and making lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('<h1>Star Trek Cat Pics</h1>\n<img src="https://media.giphy.com/media/3o7btLQYqjtQQqQq2U/giphy.gif">')
            break
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('<h1>About Baphomet</h1>\n<img src="https://media.giphy.com/media/3o7btLQYqjtQQqQq2U/giphy.gif">')
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>Not found</h1>\n<img src="https://media.giphy.com/media/3o7btLQYqjtQQqQq2U/giphy.gif">')
            break
    }
})

server.listen(port, () => console.log(`Server running at http://localhost:${port}/ ` + '... press Ctrl+C to quit'))