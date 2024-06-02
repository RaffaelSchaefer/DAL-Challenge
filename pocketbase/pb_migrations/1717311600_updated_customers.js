/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  collection.listRule = "(id = @collection.customer_user.works_for && @collection.customer_user.isUser = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "(id = @collection.customer_user.works_for && @collection.customer_user.isUser = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
