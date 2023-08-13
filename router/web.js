const express = require('express')

const homeController = require('../controller/homeController.js')

const route = express.Router()
route.get('/', homeController.api)
route.post('/search', homeController.apisearch)

module.exports = route