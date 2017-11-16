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

  app.get("/api/categories", function(req, res) {
    var query = {};
    if (req.query.profile.id) {
      query.ProfileId = req.query.profile.id;
    }
    db.items.findAll({
      where: query
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });


  // Get route for returning posts of a specific item type
 app.get("/api/categories", function(req, res) {
    var query = {};
    if (req.query.Categories.*) {
      query.CategoriesId = req.query.Categories.*;
    }
    db.Categories.findAll({
      where: query
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  // Get route for retrieving a single item
  app.get("/api/categories/:id", function(req, res) {
    db.Categories.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbCategories) {
      res.json(dbCategories);
    });
  });