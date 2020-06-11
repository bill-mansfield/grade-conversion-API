const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()
const { getConversion } = require('./converter')

router.get('/', (req, res) => {

    let grade = req.query.grade
    let from = req.query.from
    let to = req.query.to

    try {
        res.status(200).send(getConversion(grade, from, to))    
    } catch (error) {
        console.log(error) 
        return res.status(500).send('malformed request, refer to conventions https://github.com/bill-mansfield/grade-conversion-API') 
    }
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
