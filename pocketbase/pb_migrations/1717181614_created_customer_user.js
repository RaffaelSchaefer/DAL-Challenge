/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5mqq8y6f0fsbxjo",
    "created": "2024-05-31 18:53:34.921Z",
    "updated": "2024-05-31 18:53:34.921Z",
    "name": "customer_user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wifkhafg",
        "name": "isUser",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "bfl7ezzo",
        "name": "works_for",
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
  const collection = dao.findCollectionByNameOrId("5mqq8y6f0fsbxjo");

  return dao.deleteCollection(collection);
})
