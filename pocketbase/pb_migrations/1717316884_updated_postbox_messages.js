/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj0xbtjow4m9rov")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj0xbtjow4m9rov")

  collection.listRule = "user = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "user = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
})
