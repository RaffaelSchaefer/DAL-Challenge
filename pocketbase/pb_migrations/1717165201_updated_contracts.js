/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eth0q5h6",
    "name": "leasing_property_company",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "161icd8p",
    "name": "customers",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3lfa6cskfnlhzym",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "deieiqad",
    "name": "rent_start",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3be1zma3",
    "name": "runtime",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zntfqzcw",
    "name": "rent_end",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "reckxjel",
    "name": "payment_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "monthly",
        "yearly"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjtyfyea",
    "name": "total_investment_costs",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scgbgm0j",
    "name": "direct_debit",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "64nhlgle",
    "name": "asset",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7psgldr04t4j74y",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp4w52na",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "TA",
        "VA"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad")

  // remove
  collection.schema.removeField("eth0q5h6")

  // remove
  collection.schema.removeField("161icd8p")

  // remove
  collection.schema.removeField("deieiqad")

  // remove
  collection.schema.removeField("3be1zma3")

  // remove
  collection.schema.removeField("zntfqzcw")

  // remove
  collection.schema.removeField("reckxjel")

  // remove
  collection.schema.removeField("zjtyfyea")

  // remove
  collection.schema.removeField("scgbgm0j")

  // remove
  collection.schema.removeField("64nhlgle")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp4w52na",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "TA",
        "VA"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
