var path = require("path");
var fs = require("fs");
const express = require('express')
const router = express.Router()

const controllers = fs.readdirSync(__dirname)
  .filter(f => f !== 'index.js');

controllers.forEach(controller => {
  router.use(`/${controller}`, require(`./${controller}`))
})

module.exports = router
