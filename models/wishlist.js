module.exports = function(sequelize, DataTypes) {
// Dependencies
// =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a  model that matches up with DB
var Wishlist = sequelize.define("Wishlist", {
  top: {
    type: DataTypes.STRING,
  },

  bottom:  {
    type: DataTypes.STRING,
  },    
  
  dress:  {
    type: DataTypes.STRING,
  },
         
  socks:  {
    type: DataTypes.STRING,
  },
       
  shoes:  {
    type: DataTypes.STRING,
  },
  
  accessories:  {
    type: DataTypes.STRING,
  },  
  
  season:  {
    type: DataTypes.STRING,
  },
  
  color:  {
    type: DataTypes.STRING,
  },
  
  emotion:  {
    type: DataTypes.STRING,
  },

  brand:  {
    type: DataTypes.STRING,
  },  
  
  planner:  {
    type: DataTypes.BOOLEAN,
  }, 
  Image:  {
    type: DataTypes.STRING,
  }, 
},{
  timestamps: true
});

// // Syncs with DB
// items.sync();

// // Makes the Model available for other files (will also create a table)
// module.exports = Items;

  Wishlist.associate = function(models) {
    // Associating Profile with Items
    // When Profile is deleted, also delete any associated Items
    Wishlist.belongsTo(models.Profile, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Wishlist;

};
