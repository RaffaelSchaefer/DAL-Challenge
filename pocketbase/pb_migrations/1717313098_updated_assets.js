/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7psgldr04t4j74y")

  collection.listRule = "(id = @collection.contracts.asset && @collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "(id = @collection.contracts.asset && @collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7psgldr04t4j74y")

  collection.listRule = "(id = @collection.contracts.asset && @collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id) || @collection.dla_user.id = @request.auth.id"
  collection.viewRule = "(id = @collection.contracts.asset && @collection.contracts.customers.customer_user_via_works_for.id = @request.auth.id) || @collection.dla_user.id = @request.auth.id"

  return dao.saveCollection(collection)
})
