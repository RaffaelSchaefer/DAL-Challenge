/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  // remove
  collection.schema.removeField("ygjxacco")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdckbkrk",
    "name": "paid",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mto7wyerp2nus0d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygjxacco",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "beglichen",
        "offen"
      ]
    }
  }))

  // remove
  collection.schema.removeField("gdckbkrk")

  return dao.saveCollection(collection)
})
