// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the items

  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.profile.id) {
      query.ProfileId = req.query.profile.id;
    }
    db.items.findAll({
      where: query
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });


  // Get route for returning posts of a specific item type
 app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.items.*) {
      query.ProfileId = req.query.items.*;
    }
    db.items.findAll({
      where: query
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Get route for retrieving a single item
  app.get("/api/items/:id", function(req, res) {
    db.Items.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });