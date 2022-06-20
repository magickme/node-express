const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const fortune = require('./lib/fortune.js')
const handlers = require('./lib/handlers')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', handlers.home)

app.get('/about', handlers.about)

//custom 404
app.use(handlers.notFound)

//custom 500
app.use(handlers.serverError)

if(require.main === module) {
    app.listen(port, () => console.log(`Listening on port ${port}`))
} else {
    module.exports = app
}