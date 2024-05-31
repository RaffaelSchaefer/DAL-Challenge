/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14jlb0zd925lvtl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbkyqo0s",
    "name": "message",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pxpm8shgwczr7g2",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14jlb0zd925lvtl")

  // remove
  collection.schema.removeField("xbkyqo0s")

  return dao.saveCollection(collection)
})
