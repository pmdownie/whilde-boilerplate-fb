const express = require('express')
const next = require('next')
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

server.get('/:category', (req, res) => {
    app.render(req, res, '/category', { category: req.params.category })
})

app.prepare().then(() => {
    server.use((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    })

    server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
