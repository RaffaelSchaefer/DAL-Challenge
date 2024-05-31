/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7brwi7a8c5jkwad",
    "created": "2024-05-31 14:15:14.745Z",
    "updated": "2024-05-31 14:15:14.745Z",
    "name": "contracts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9vvp6qmz",
        "name": "contract_index",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7brwi7a8c5jkwad");

  return dao.deleteCollection(collection);
})
