MarzipanApp = new Marionette.Application()

MarzipanApp.addRegions {
  mainRegion: "#main-region"
}

MarzipanApp.User = Backbone.Model.extend {}

MarzipanApp.UserCollection = Backbone.Collection.extend {
  model: MarzipanApp.User
}

MarzipanApp.UserItemView = Marionette.ItemView.extend {
  tagName: "li",
  template: "#user-list-item"
}

MarzipanApp.UserCollectionView = Marionette.CollectionView.extend {
  tagName: "ul",
  itemView: MarzipanApp.UserItemView
}

# MarzipanApp.userView = Marionette.ItemView.extend {
#   tagName: "ul",
#   itemView: MarzipanApp.UserItemView
# }

MarzipanApp.on 'initialize:after', () ->
  users = new MarzipanApp.UserCollection [
    {
      firstName: "Bob",
      lastName: "Brigham"
    },
    {
      firstName: "Bob",
      lastName: "Brigham"
    }
  ]


  userListView = new MarzipanApp.UserCollectionView {
    collection: users
  }
  MarzipanApp.mainRegion.show userListView

# MarzipanController = Backbone.Marionette.Controller.extend {
#   displayUsers: () ->
#     console.log "show Users"
# }
#
# MarzipanRouter = Backbone.Marionette.AppRouter.extend {
#   controller: MarzipanController,
#   appRoutes: {
#     "": "displayUsers"
#   }
# }
#
# MarzipanApp.addInitializer () ->
#   controller = new MarzipanController()
#   router = new MarzipanRouter({controller: controller})
#   console.log "hello from the addInitializer"
#
# MarzipanApp.on 'initialize:after', () ->
#   if Backbone.history
#     Backbone.history.start()
#
#   console.log "hello from the initialize:after."

MarzipanApp.start()

$('#sidebar').sidebarnav()
