/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.indexes = []

  // remove
  collection.schema.removeField("9vvp6qmz")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_plE7qQ3` ON `contracts` (`contract_index`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9vvp6qmz",
    "name": "contract_index",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
