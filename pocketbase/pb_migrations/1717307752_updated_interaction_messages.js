/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxpm8shgwczr7g2")

  collection.listRule = "@collection.users.id = @request.auth.id"
  collection.viewRule = "@collection.users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxpm8shgwczr7g2")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
