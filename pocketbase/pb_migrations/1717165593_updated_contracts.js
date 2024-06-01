/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_plE7qQ3` ON `contracts` (`contract_index`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.indexes = []

  return dao.saveCollection(collection)
})
