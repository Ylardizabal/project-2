// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var Profile = require("../models/profile.js");


// Routes
// =============================================================
module.exports = function(app) {

 
  // Add an item
  app.post("/api/new", function(req, res) {

    console.log("New Profile");
    console.log(req.body);

    Profile.create({
      email: req.body.email,
      birthday: req.body.birthday,
      gender: req.body.gender,
      username: req.body.username,
      password: req.body.password
      // confirm_password: req.body.confirm_password
      
    }).then(function(results) {
      // `results` here would be the newly created items
      res.json(dbProfile)
    //   res.end();
    // });

  });


  // DELETE route for deleting items
  app.delete("/api/profile/:id", function(req, res) {
    db.Profile.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // PUT route for updating 
  app.put("/api/profile", function(req, res) {
    db.Profile.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
});
};