/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1c4u7f679vyvrj")

  collection.listRule = "id = @request.auth.id || @collection.dla_user.id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id || @collection.dla_user.id = @request.auth.id"
  collection.createRule = "@collection.dla_user.id = @request.auth.id"
  collection.updateRule = "@collection.dla_user.id = @request.auth.id"
  collection.deleteRule = "@collection.dla_user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1c4u7f679vyvrj")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
