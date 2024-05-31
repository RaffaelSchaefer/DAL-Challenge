/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wly91krg7syquja")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_lErqZ1M` ON `sustainability_data` (\n  `asset`,\n  `query_date`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wly91krg7syquja")

  collection.indexes = []

  return dao.saveCollection(collection)
})
