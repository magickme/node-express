const express = require('express');

const app = express();

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/error', (req, res) => {
    res.status(500)
    res.render('error')
})

app.get('/greeting', (req, res) => {
    res.render('greeting', {
        message: 'Hello, World!',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username
    })
})

app.get('/no-layout', (req, res) => {
    res.render('no-layout', { layout: null })
})

app.get('/custom-layout', (req, res) => {
    res.render('custom-layout', { layout: 'custom' })
})

app.get('/text', (req, res) => {
    res.type('text/plain')
    res.send('This is plain text')
})

app.use((err, req, res, next) => {
    console.error('** ERROR ** ' + err.message)
    res.status(500).render('08-error', { message: "You shouldnt have clicked" })
})

app.use((req, res) => {
    res.status(404).render('404')
})