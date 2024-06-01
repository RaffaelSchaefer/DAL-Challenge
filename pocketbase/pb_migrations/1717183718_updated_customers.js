/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egafskka",
    "name": "url",
    "type": "url",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lfa6cskfnlhzym")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egafskka",
    "name": "url",
    "type": "url",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
