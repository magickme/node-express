app.post('/process-contact', (req, res) => {
    try {
        if(req.body.simulateError) throw new Error(
            "error saving contact!"
        )
        console.log(`contact received from ${req.body.name} <${req.body.email}>`)
        res.format({
            'text/html': () => {
                res.redirect(303, '/thank-you'),
                'application/json': () => {
                    res.json({
                        success: true
                    })
            }}
            
    } catch(err) ){
        console.log(err.message)
        res.format({
            'text/html': () => {
                res.redirect(303, '/error'),
                'application/json': () => {
                    res.json({
                        success: false,
                        message: err.message
                    })
                }
            }
        })
    }
}

               