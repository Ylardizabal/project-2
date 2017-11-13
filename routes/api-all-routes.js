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
  app.get("/api/items/", function(req, res) {
    db.Items.findAll({})
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/items/category/:category", function(req, res) {
    db.items.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/Items/:id", function(req, res) {
    db.Items.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });