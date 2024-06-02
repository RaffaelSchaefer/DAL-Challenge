/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yl60qz1g",
    "name": "file",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  // remove
  collection.schema.removeField("yl60qz1g")

  return dao.saveCollection(collection)
})
