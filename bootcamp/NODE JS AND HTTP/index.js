

const express = require('express')
const app = express()

app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: "hello world, jorda"
    })
})

app.listen(8000, () => {
    console.log('server jalan bos di port 8000')
})