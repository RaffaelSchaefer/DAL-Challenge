/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mqq8y6f0fsbxjo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xphjnwor",
    "name": "gp_number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mqq8y6f0fsbxjo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xphjnwor",
    "name": "gp_number",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
