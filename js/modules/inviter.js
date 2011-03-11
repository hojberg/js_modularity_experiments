YUI.add("inviter", function (Y) {

  Y.Inviter = {

    init: function () {

      // List all the univited friends in the #imported_friends node
      var friendsPresenter = new Y.FriendsPresenter();
      friendsPresenter.showUninvited("#imported_friends", Y.currentUser);

      // The friends module could instantiate a lot of other things
      // For instance a facebook connector, gmail inviter etc ..
 
    }
  
  };

}, "1.0.0", {requires: ["friends_presenter"]});
