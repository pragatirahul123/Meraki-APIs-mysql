const express = require('express')

const router = express.Router()
const CreateController = require('../controller/post_method')

router.post('/',CreateController.post_data)

module.exports =router