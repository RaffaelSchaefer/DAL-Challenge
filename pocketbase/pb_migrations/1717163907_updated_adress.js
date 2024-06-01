/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx6gqo0s3n1magz")

  collection.name = "address"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx6gqo0s3n1magz")

  collection.name = "adress"

  return dao.saveCollection(collection)
})
