YUI.add("friend_model", function (Y) {

  var Friend = function (config) {
    Friend.superclass.constructor.apply(this, arguments);
  };

  // The name of the class gets prefixed on events fired by the class
  Friend.NAME = 'Friend';

  // Friend attributes
  Friend.ATTRS = {};
  
  // Friend static methods
  Friend.allUninvitedByUser = function (user, callback) {
  
    // .. Ajax call to locate all univited friens by the user
    // and invoke callback function with the result from the server

    // Dummy callback result - in real life this would be data from the server
    return callback([
      new Friend({name: 'Paul Smith'}), 
      new Friend({name: 'Jonah Hill'}), 
      new Friend({name: 'Colin McRae'}), 
      new Friend({name: 'Freddy Mercury'})
    ]);

  };

  // Friend methods
  Y.extend(Friend, Y.Base, {

    // Friend contructor
    initializer: function(options) {
      this.name = options.name;
    }

  });

  // Hook up the Friend model to the rest of the app
  Y.Friend = Friend;

}, "1.0.0", {require: ["base"]});
