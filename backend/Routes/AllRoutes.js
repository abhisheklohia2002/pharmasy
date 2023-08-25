const express = require('express');
const router  = express.Router();
const Actions = require("../Controller/Actions")



router.post("/pharm",Actions.Post_ParmEasy)
router.post("/phone",Actions.Phoneverify)


module.exports  = router