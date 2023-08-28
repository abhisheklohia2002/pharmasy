const express = require('express');
const router  = express.Router();
const Actions = require("../Controller/Actions")



router.post("/pharm",Actions.Post_ParmEasy)
router.post("/phone",Actions.Phoneverify)
router.get('/phone',Actions.GetEmail)
router.put('/pharm',Actions.UpdatePharm)
module.exports  = router