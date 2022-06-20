const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello World</h1>\n<img src="https://media.giphy.com/media/3o7btLQYqjtQQqQq2U/giphy.gif">')
    } 
);

server.listen(port, () => 
    console.log(`Server running at http://localhost:${port}/ ` + '... press Ctrl+C to quit')
)