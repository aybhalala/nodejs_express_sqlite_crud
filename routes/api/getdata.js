const express = require("express");
const router = express.Router();

//Load User Model
const functions = require("../../include/functions");
const dbFunctions = require("../../db/dbFunctions");

// @route  GET api/getdata/test
// @desc   Tests getdata route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "GetData Works" }));

// @route  GET api/getdata/
// @desc   Get Law Firms Data
// @access Public
router.get("/", (req, res) => {
  //console.log(req.query);
	if(req.query.table){
		dbFunctions(req.query).then((op) => {
			res.set('Content-Type', 'text/html');
			res.send(new Buffer(functions.createTextArea(op)));
		})		
	}
});


module.exports = router;