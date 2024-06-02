/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "(@collection.invoices.contract.customers = @collection.customer_user.works_for && @collection.customer_user.isUser = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  collection.listRule = "(@collection.invoices.contract.customers = @collection.customer_user.works_for && @collection.customer_user.isUser = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"
  collection.viewRule = "(@collection.invoices.contract.customers = @collection.customer_user.works_for && @collection.customer_user.isUser = @request.auth.id) || @collection.dla_user.isUser = @request.auth.id"
  collection.createRule = null

  return dao.saveCollection(collection)
})
