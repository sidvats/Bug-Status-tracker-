const express = require('express');
var router=express.Router();
var bugcontroller=require('../controller/bug.controller');

router.get('/',bugcontroller.findbug)
router.post('/addbug',bugcontroller.addbug)
router.delete('/:id',bugcontroller.deletebug);
module.export=router;