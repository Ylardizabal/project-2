module.exports = function(sequelize, DataTypes) {
// Dependencies
// =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a  model that matches up with DB
var Profile = sequelize.define("Profile", {
 email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
    },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
      },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
       },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
        },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
        },
  confirm_password: {
    type: DataTypes.STRING,
    allowNull: false,
    // contains: password,
        },
}, {
  timestamps: true
});

// // Syncs with DB
// Profile.sync();

// // Makes the Model available for other files (will also create a table)
// module.exports = Profile;

  Profile.associate = function(models) {
    // Associating Profile with Items
    // When Profile is deleted, also delete any associated Items
    Profile.hasMany(models.Items, {
      onDelete: "cascade"
    });

    // Profile.hasMany(model.Wishlist, {
    // });
  };

  return Profile;
};