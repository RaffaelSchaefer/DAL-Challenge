/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14jlb0zd925lvtl")

  collection.name = "pop_up_messages"
  collection.indexes = [
    "CREATE INDEX `idx_4Qsg97X` ON `pop_up_messages` (\n  `user`,\n  `display_date`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14jlb0zd925lvtl")

  collection.name = "pop_up_message"
  collection.indexes = [
    "CREATE INDEX `idx_4Qsg97X` ON `pop_up_message` (\n  `user`,\n  `display_date`\n)"
  ]

  return dao.saveCollection(collection)
})
