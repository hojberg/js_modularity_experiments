YUI.add("user_model", function (Y) {

  var User = function (config) {
    User.superclass.constructor.apply(this, arguments);
  };

  // The name of the class gets prefixed on events fired by the class
  User.NAME = 'User';

  // User attributes
  User.ATTRS = {};
  
  // User methods
  Y.extend(User, Y.Base, {

    // User contructor
    initializer: function(options) {
      this.username = options.username;
      this.name = options.name;
      this.email = options.email;
    }

  });

  // Hook up the User model to the rest of the app
  Y.User = User;

}, "1.0.0", {require: ["base"]});

