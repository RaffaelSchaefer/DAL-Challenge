/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "id = @request.auth.id || id = @collection.dla_user.isUser"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "id = @request.auth.id || id = @collection.dla_user.isUser"
  collection.viewRule = "id = @request.auth.id || id = @collection.dla_user.isUser"
  collection.createRule = ""

  return dao.saveCollection(collection)
})
