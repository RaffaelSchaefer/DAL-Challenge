/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  collection.name = "customers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  collection.name = "customer"

  return dao.saveCollection(collection)
})
