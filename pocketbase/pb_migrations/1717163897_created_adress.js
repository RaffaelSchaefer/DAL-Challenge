/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jx6gqo0s3n1magz",
    "created": "2024-05-31 13:58:17.837Z",
    "updated": "2024-05-31 13:58:17.837Z",
    "name": "adress",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "c20kkk7l",
        "name": "postalcode",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "z5jeavgs",
        "name": "townname",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("jx6gqo0s3n1magz");

  return dao.deleteCollection(collection);
})
