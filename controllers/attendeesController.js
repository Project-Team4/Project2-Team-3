var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var attendee = require("../models/attendees.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  attendee.selectAll(function(data) {
    var hbsObject = {
      attendees: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/attendee", function(req, res) {
  attendee.insertOne([
    "User_Id",
    "Event_Key"
  ], [
    req.body.userId,
    req.body.eventId
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/attendee/:id", function(req, res) {
  var condition = "id = " + req.params.id;  console.log("condition", condition);
  attendee.updateOne({
    "Notified": req.body.notified
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/attendee/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  attendee.deleteOne(condition, function(result) {
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
