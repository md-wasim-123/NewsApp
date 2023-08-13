const express = require('express')

const homeController = require('../controller/homeController.js')

const route = express.Router()
route.get('/home', homeController.api)
route.post('/search', homeController.apisearch)

module.exports = route