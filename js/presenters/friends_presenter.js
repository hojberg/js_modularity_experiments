YUI.add("friends_presenter", function (Y) {

  var FriendsPresenter = function (config) {
    FriendsPresenter.superclass.constructor.apply(this, arguments);
  };
  
  // The name of the class gets prefixed on events fired by the class
  FriendsPresenter.NAME = "FriendsPresenter";

  // FriendsPresenter attributes
  FriendsPresenter.ATTRS = {};
  
  // FriendsPresenter methods
  Y.extend(FriendsPresenter, Y.Base, {

    // FriendsPresenter contructor
    initializer: function () {},

    showUninvited: function (node, currentUser) {
      node = Y.one(node);
    
      // Get the model to lookup all friends by the current user
      Y.Friend.allUninvitedByUser(currentUser, function (friends) {
        var frag = Y.Node.create("<ul></ul>"),
            friendNode;

        // loop over the friends
        Y.Array.each(friends, function (f) {
          // create a list item and add that to the fragment
          friendNode = Y.Node.create("<li class='friend'></li>");
          friendNode.setContent(f.name);
          frag.appendChild(friendNode);

        });

        // add the fragment contents to the container node
        node.setContent(frag.get("innerHTML"));

      });

    }

  });
  
  // Hook up the FriendsPresenter to the rest of the app
  Y.FriendsPresenter = FriendsPresenter;
  

}, "0.0.1", {requires: ["base", "friend_model", "node"]});

