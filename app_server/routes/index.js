var express = require('express');
var router = express.Router();
var ctrlItinerary = require('../controllers/itinerary');
var ctrlOthers = require('../controllers/others');

/* GET home page. */


router.get("/",ctrlOthers.homepage);
router.get("/AddCity",ctrlOthers.addcity);
router.get("/AddPlan",ctrlOthers.addPlanforday);
//*** FinalItinerary
router.get("/FinalItinerary",ctrlItinerary.FinalItinerary);

module.exports = router;
