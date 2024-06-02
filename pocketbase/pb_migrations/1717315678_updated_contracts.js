/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.listRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "@collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id || @collection.dla_user.isUser = @request.auth.id"
  collection.createRule = null

  return dao.saveCollection(collection)
})
