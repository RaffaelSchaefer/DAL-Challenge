/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mqq8y6f0fsbxjo")

  collection.listRule = "isUser = @request.auth.id || @collection.dla_user.id = @request.auth.id"
  collection.viewRule = "isUser = @request.auth.id || @collection.dla_user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mqq8y6f0fsbxjo")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
