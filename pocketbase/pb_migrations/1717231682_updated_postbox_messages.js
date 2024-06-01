/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj0xbtjow4m9rov")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igeglzp7",
    "name": "content",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj0xbtjow4m9rov")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igeglzp7",
    "name": "content",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
