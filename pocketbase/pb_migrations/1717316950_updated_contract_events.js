/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1c4u7f679vyvrj")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1c4u7f679vyvrj")

  collection.listRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"
  collection.createRule = "@collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
})
