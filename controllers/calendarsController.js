var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var calendar = require("../models/calendars.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  calendar.selectAll(function(data) {
    var hbsObject = {
      calendars: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/calendar", function(req, res) {
  console.log("inside post on server side");
  calendar.insertOne([
    "Event_Type",
    "Event_Name",
    "Event_Start_Date",
    "Event_Info",
    "Event_Location"
  ], [
    req.body.type,
    req.body.name,
    req.body.start_date,
    req.body.info,
    req.body.location
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/calendar/:id", function(req, res) {
  var condition = "id = " + req.params.id;  console.log("condition", condition);
  calendar.updateOne({
    Event_Start_Date: req.body.newStartDate
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/calendar/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  calendar.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });


});

// Export routes for server.js to use.
module.exports = router;
