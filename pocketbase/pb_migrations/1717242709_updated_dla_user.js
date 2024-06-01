/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6b5850leg5qny6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9liel8v3",
    "name": "department",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ll1sghy9",
    "name": "working_hours",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("i6b5850leg5qny6")

  // remove
  collection.schema.removeField("9liel8v3")

  // remove
  collection.schema.removeField("ll1sghy9")

  return dao.saveCollection(collection)
})
