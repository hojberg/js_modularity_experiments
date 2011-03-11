YUI.add("friends_module", function () {

  
  Y.Friends = {

    init: function () {

      var friendsPresenter = new FriendsPresenter();

      friendsPresenter.showUninvited({node: "#imported_friends", 
                                    currentUser: Y.currentUser});



      
    }


  
  };



}, "1.0.0", {requires: ["users_presenter"]});
