/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jx6gqo0s3n1magz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkxdn3rr",
    "name": "streetname",
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
  const collection = dao.findCollectionByNameOrId("jx6gqo0s3n1magz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkxdn3rr",
    "name": "streetname",
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
