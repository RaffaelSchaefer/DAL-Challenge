/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxpm8shgwczr7g2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "go77oreh",
    "name": "content",
    "type": "editor",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pxpm8shgwczr7g2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "go77oreh",
    "name": "content",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
