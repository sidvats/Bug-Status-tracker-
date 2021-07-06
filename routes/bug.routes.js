const express = require('express');
var router=express.Router();
var bugcontroller=require('../controller/bug.controller');

router.get('/',bugcontroller.findbug)
router.post('/addbug',bugcontroller.addbug)
module.export=router;