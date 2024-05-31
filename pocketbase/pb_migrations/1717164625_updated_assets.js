/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7psgldr04t4j74y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wd8uownx",
    "name": "object_construction",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fsbxul2p",
    "name": "property_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Kauf",
        "Erbbaurecht"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyjszye9",
    "name": "subtenant",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "auqe7duu",
    "name": "type",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evs5b2oi",
    "name": "condition",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Neubau",
        "Bestandsgebäude"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7psgldr04t4j74y")

  // remove
  collection.schema.removeField("wd8uownx")

  // remove
  collection.schema.removeField("fsbxul2p")

  // remove
  collection.schema.removeField("eyjszye9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "auqe7duu",
    "name": "typ",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evs5b2oi",
    "name": "condition",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Neubau",
        "Bestandsgebäude"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
