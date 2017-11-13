// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var Items = require("../models/items.js");


// Routes
// =============================================================
module.exports = function(app) {

 
  // Add an item
  app.post("/api/new", function(req, res) {

    console.log("New Item");
    console.log(req.body);

    Items.create({
      top: req.body.top,
      bottom: req.body.bottom,
      dress: req.body.dress,
      socks: req.body.socks,
      shoes: req.body.shoes,
      accessories: req.body.accessories,
      season: req.body.season,
      color: req.body.color,
      emotion: req.body.emotion,
      brand: req.body.brand,
      planner: req.body.planner,
      favorites: req.body.favorites,
      timestamps: req.body.timestamps,
      image_url: reg.body.image_url
    }).then(function(results) {
      // `results` here would be the newly created items
      res.json(dbItems)
      // res.end();
    });

  });


  // DELETE route for deleting items
  app.delete("/api/items/:id", function(req, res) {
    db.Items.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // PUT route for updating items
  app.put("/api/items", function(req, res) {
    db.Items.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbItems) {
      res.json(dbItems);
    });
  });
};