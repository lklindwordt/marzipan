(function() {
  var MarzipanApp;

  MarzipanApp = new Marionette.Application();

  MarzipanApp.addRegions({
    mainRegion: "#main-region"
  });

  MarzipanApp.User = Backbone.Model.extend({});

  MarzipanApp.UserCollection = Backbone.Collection.extend({
    model: MarzipanApp.User
  });

  MarzipanApp.UserItemView = Marionette.ItemView.extend({
    tagName: "li",
    template: "#user-list-item"
  });

  MarzipanApp.UserCollectionView = Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: MarzipanApp.UserItemView
  });

  MarzipanApp.on('initialize:after', function() {
    var userListView, users;
    users = new MarzipanApp.UserCollection([
      {
        firstName: "Bob",
        lastName: "Brigham"
      }, {
        firstName: "Bob",
        lastName: "Brigham"
      }
    ]);
    userListView = new MarzipanApp.UserCollectionView({
      collection: users
    });
    return MarzipanApp.mainRegion.show(userListView);
  });

  MarzipanApp.start();

  $('#sidebar').sidebarnav();

}).call(this);
